// ShoppingPage - Cart + Checkout Form page

import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import "../styles/ShoppingPage.css";

function ShoppingPage({ cart, dispatch, onSubmit }) {
  return (
    <div className="container mt-4 mb-4">
      <h2 className="mb-4">Shopping Cart & Checkout</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <Cart cart={cart} dispatch={dispatch} />
        </div>
        <div className="col-lg-4">
          <CheckoutForm
            cartEmpty={cart.items.length === 0}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
