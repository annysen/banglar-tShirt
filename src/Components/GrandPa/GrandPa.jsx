import Father from "./../Father/Father";
import Mother from "../Mother/Mother";
import Uncle from "../Uncle/Uncle";

import "./Grandpa.css";

const GrandPa = () => {
  const ring = "Diamond Ring";
  return (
    <div className="grandpa">
      <h1>GrandPa</h1>
      <section className="flex">
        <Father ring={ring}></Father>
        <Mother></Mother>
        <Uncle></Uncle>
      </section>
    </div>
  );
};

export default GrandPa;
