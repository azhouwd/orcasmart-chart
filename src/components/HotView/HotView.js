import React from "react";
import "./HotView.css";

const HotView = ({ topViewed }) => {
  const item = topViewed.map((el, index) => {
    return (
      <p key={index} className="hotview-element">
        {el}
      </p>
    );
  });
  return (
    <div>
      <h1>Hot View</h1>
      {item}
    </div>
  );
};

export default HotView;
