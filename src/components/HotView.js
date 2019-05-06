import React from "react";

const HotView = ({ topViewed }) => {
  const item = topViewed.map((el, index) => {
    return <p key={index}>{el}</p>;
  });
  return (
    <div>
      <h1>Hot View</h1>
      {item}
    </div>
  );
};

export default HotView;
