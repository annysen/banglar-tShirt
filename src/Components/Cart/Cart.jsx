const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log(cart);

  let massage;

  if (cart.length) {
    massage = "Here is your Product";
  } else {
    massage = "Hei add product";
  }

  return (
    <div>
      <h4>Order Summary: {cart.length}</h4>

      <h4>{massage}</h4>

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
