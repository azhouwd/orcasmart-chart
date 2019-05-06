import React from "react";

const TotalPrice = ({ totalPrice }) => {
  return <h1 style={{ textAlign: "center" }}>Sold: ${totalPrice / 100}</h1>;
};

export default TotalPrice;
