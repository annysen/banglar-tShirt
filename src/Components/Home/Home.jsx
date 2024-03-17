import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);
  const handleAddToCart = (id) => {
    console.log(id);
  };
  console.log(tShirts);
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
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
