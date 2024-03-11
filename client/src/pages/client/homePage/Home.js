import React from "react";
import style from "./Home.module.css";
import homecard from "../../../data/homecard.json";
import HomeCard from "../../../components/client/homeCard/HomeCard";

function Home() {
  console.log("hd,", homecard);
  return (
    <>
      <div className="row">
        <div className={`text-center ${style.titleBox}`}>
          <h6 className={style.title}>
            Geleceği yemeyiz,{" "}
            <span className={style.titlepart}>sürdürülebilir yeriz!</span>
          </h6>
        </div>
        <div className={style.homeText}>
          <p>
            Her yıl Dünya’da üretilen gıdaların yaklaşık %30’u çöpe gitmektedir
            ve toplam karbon ayak izinin %10’u israftan kaynaklanmaktadır.
          </p>
          <p className={style.homeTextPart}>
            Yeriz ile bu duruma bir son vermek ister misin?
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center w-100">
        {homecard.map((card, key) => {
          <div key={key} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <HomeCard icon={card.icon} title={card.title} text={card.text} />
          </div>;
        })}
      </div>
    </>
  );
}

export default Home;
