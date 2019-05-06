import React from "react";

const HotSale = ({ topSold }) => {
  const item = topSold.map((el, index) => {
    return <p key={index}>{el}</p>;
  });
  return (
    <div>
      <h1>Hot Sales</h1>
      {item}
    </div>
  );
};

export default HotSale;
