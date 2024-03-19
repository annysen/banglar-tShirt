import React from "react";
import MySelf from "../MySellf/MySelf";

const Father = ({ ring }) => {
  return (
    <div>
      <h4>Father</h4>
      <section>
        <MySelf ring={ring}></MySelf>
      </section>
    </div>
  );
};

export default Father;
