import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Gf = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h4>My Gf</h4>
      <p>{ring}</p>
      <small>{angti}</small>
    </div>
  );
};

export default Gf;
