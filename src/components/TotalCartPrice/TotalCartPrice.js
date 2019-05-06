import React from "react";

const TotalCartPrice = ({ cartPrice }) => {
  return <h1 style={{ textAlign: "center" }}>In Cart: ${cartPrice / 100}</h1>;
};

export default TotalCartPrice;
