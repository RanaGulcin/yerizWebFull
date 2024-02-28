import React from "react";
import style from "./HomeCard.module.css";

function HomeCard(props) {
  const { icon, title, text } = props;
  return (
    <div>
      <div className={`card ${style.card}`} >
        <div className="card-body">
          <img src={icon} alt="Kart İkon" />
          <h5 className="card-title fw-semibold py-1">{title}</h5>
          <p className="card-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
