import React from "react";
import style from "./TeamCard.module.css";
import team from "../../../data/teammembers.json";

function TeamCard(props) {
  const {name, surname, imgSrc, team, university, job, ...dist} = props;
  return (
    <div className="card my-2 px-3 border-0">
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className={style.imgBorder}>
          {/* <img src="." alt="Takım Üyesi" /> */}
        </div>

        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <p>
              {name} {surname}
            </p>
            <span>|</span>
            <h5 className="card-title">{team}</h5>
          </div>
          <hr style={{opacity: "0.6"}} />
          <div className="card-text">
            <p>{job}</p>
            <p>{university}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
