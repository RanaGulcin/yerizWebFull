import React from "react";
import style from "./About.module.css";
import teammembers from "../../../data/teammembers.json";
import TeamCard from "../../../components/client/teamCard/TeamCard";

function About() {
  return (
    <div className="">
      <div className="row">
        <h5 className={`pt-3 ${style.header}`}>Hikayemİz</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="row">
        <h5 className={`pt-3 ${style.header}`}>Multidisipliner Ekibimiz</h5>
        {teammembers?.map((member) => {
          return (
            <div key={member.memberId} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <TeamCard 
              name={member.name}
              surname={member.surname}
              team={member.team}
              university={member.university}
              job={member.job}
              imgSrc={member.profilImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
