import React, { useContext } from "react";
import Cusine from "../Cusine/Cusine";
import { MoneyContext } from "../GrandPa/GrandPa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h4>Uncle</h4>
      <p>Grandpa Balance:{money} </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000 </button>

      <section>
        <Cusine></Cusine>
      </section>
    </div>
  );
};

export default Uncle;
