import "./Tshirt.css";

const TShirt = ({ tshirt }) => {
  const { name, price, picture } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <p>{name}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default TShirt;
