import React from "react";
import "./HotSale.css";

const HotSale = ({ topSold }) => {
  const item = topSold.map((el, index) => {
    return (
      <p key={index} className="hotsale-element">
        {el}
      </p>
    );
  });
  return (
    <div>
      <h1>Hot Sales</h1>
      {item}
    </div>
  );
};

export default HotSale;
