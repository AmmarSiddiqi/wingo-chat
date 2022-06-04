import React from "react";
import "./card.scss";

const Card = (props) => {
  return (
    <div className={`card_container ${props.classes}`}>{props.children}</div>
  );
};

export default Card;
