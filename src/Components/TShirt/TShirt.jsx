import "./Tshirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { name, price, picture, _id } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <p>{name}</p>
      <button onClick={() => handleAddToCart(_id)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
