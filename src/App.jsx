// src/App.jsx

import { useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Orchids from "./components/Orchids";
import ShoppingPage from "./components/ShoppingPage";
import Contact from "./components/Contact";
import OrderConfirmation from "./components/OrderConfirmation";
import { ThemeProvider } from "./components/ThemeContext";
import { cartReducer, initialState } from "./reducers/cartReducer";
import "./App.css";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [orderData, setOrderData] = useState(null);

  const totalQuantity = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleSubmitOrder = (customerInfo) => {
    setOrderData({
      customer: customerInfo,
      items: [...cart.items],
      totalQuantity,
      totalPrice,
    });
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navigation cartItemCount={totalQuantity} />
        <Routes>
          <Route path="/" element={<Orchids dispatch={dispatch} />} />
          <Route
            path="/cart"
            element={
              orderData ? (
                <div className="container mt-4">
                  <OrderConfirmation orderData={orderData} />
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => setOrderData(null)}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ShoppingPage
                  cart={cart}
                  dispatch={dispatch}
                  onSubmit={handleSubmitOrder}
                />
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
