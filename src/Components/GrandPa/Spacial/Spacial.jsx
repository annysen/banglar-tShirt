import React, { useContext } from "react";
// import { useContext } from "react";
import { RingContext } from "../GrandPa";

const Spacial = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h4>Spacial</h4>
      <p>{ring}</p>
    </div>
  );
};

export default Spacial;
