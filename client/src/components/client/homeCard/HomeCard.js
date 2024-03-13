import React from "react";
import style from "./HomeCard.module.css";

function HomeCard(props) {
  const { icon, title, text, ...dist } = props;
  return (
    
      <div className={`card ${style.card}`} >
        <div className="card-body">
          <img src={process.env.PUBLIC_URL + icon} alt="Kart İkon" />
          <h5 className={`card-title ${style.cardTitle}`}>{title}</h5>
          <p className={`card-text ${style.cardText}`}>
            {text}
          </p>
        </div>
      </div>
    
  );
}

export default HomeCard;
