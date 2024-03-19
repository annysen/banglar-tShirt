import Father from "./../Father/Father";
import Mother from "../Mother/Mother";
import Uncle from "../Uncle/Uncle";

import "./Grandpa.css";
import { createContext, useState } from "react";

export const RingContext = createContext("Golden Ring");
export const MoneyContext = createContext(0);

const GrandPa = () => {
  const ring = "Diamond Ring";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h1>GrandPa</h1>
      <p>Grandppa has money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Gold">
          <section className="flex">
            <Father ring={ring}></Father>
            <Mother></Mother>
            <Uncle></Uncle>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
