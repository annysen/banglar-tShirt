import "./Cart.css";
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
      <h4 className={cart.length === 1 ? "red" : "blue"}>
        Order Summary: {cart.length}
      </h4>

      <h1 className={`yellow ${cart.length > 2 ? "text-blue" : "text-brown"}`}>
        Sample Text
      </h1>
      <h4>{massage}</h4>

      {cart.length > 3 ? (
        <p>Congrats! you have added more then 3</p>
      ) : (
        <p>Add more product then 3</p>
      )}
      {cart.map((ts) => (
        <p key={ts._id}>
          {ts.name}
          <button onClick={() => handleRemoveFromCart(ts._id)}>x</button>
        </p>
      ))}

      {cart.length === 2 || <h3>hit the 2</h3>}

      {cart.length === 4 && <h3>Oho! You are soooo rich!!!</h3>}
    </div>
  );
};

export default Cart;
