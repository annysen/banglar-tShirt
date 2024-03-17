const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log(cart);
  return (
    <div>
      <h4>Order Summary: {cart.length}</h4>

      {cart.map((ts) => (
        <p key={ts._id}>
          {ts.name}
          <button onClick={() => handleRemoveFromCart(ts._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
