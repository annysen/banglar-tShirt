import React from "react";
import Gf from "../Gf/Gf";

const MySelf = ({ ring }) => {
  return (
    <div>
      <h4>Myself</h4>
      <section>
        <Gf ring={ring}></Gf>
      </section>
    </div>
  );
};

export default MySelf;
