// OrderConfirmation component - displays order summary after successful submission

function OrderConfirmation({ orderData }) {
  const { customer, items, totalQuantity, totalPrice } = orderData;

  return (
    <div className="order-confirmation">
      <h3 className="text-success">Order Confirmed!</h3>
      <hr />

      <h5>Customer Information</h5>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <strong>Full Name</strong>
            </td>
            <td>{customer.fullName}</td>
          </tr>
          <tr>
            <td>
              <strong>Email</strong>
            </td>
            <td>{customer.email}</td>
          </tr>
          <tr>
            <td>
              <strong>Phone</strong>
            </td>
            <td>{customer.phone}</td>
          </tr>
          <tr>
            <td>
              <strong>Address</strong>
            </td>
            <td>{customer.address}</td>
          </tr>
          <tr>
            <td>
              <strong>Payment Method</strong>
            </td>
            <td>{customer.paymentMethod}</td>
          </tr>
        </tbody>
      </table>

      <h5>Order Items</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p>
          <strong>Total Quantity:</strong> {totalQuantity}
        </p>
        <p>
          <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default OrderConfirmation;
