import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);

  //   add tshirt to cart
  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      toast("Alrady added !");
    } else {
      const totalTshirt = [...cart, tshirt];
      setCart(totalTshirt);
    }
  };

  // remove tshirt from cart
  const handleRemoveFromCart = (id) => {
    const remaningCart = cart.filter((ts) => ts._id !== id);
    setCart(remaningCart);
  };

  //   console.log(tShirts);
  return (
    <div className="home-container">
      {/* tshirt section  */}
      <div className="t-shirt-container">
        {tShirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>

      {/* cart section  */}
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
