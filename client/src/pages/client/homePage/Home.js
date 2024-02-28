import React, { Fragment } from "react";
import style from "./Home.module.css";
import altTabak from "./img/alttabak.png";
import tabak from "./img/tabak.png";
import gif from "./img/nasilcalisir.gif";
import SKA2 from "./img/SKA-2.jpg";
import SKA11 from "./img/SKA-11.jpg";
import SKA12 from "./img/SKA-12.jpg";
import SKA17 from "./img/SKA-17.jpg";
import face from "./img/face.png";
import plant from "./img/plant.png";
import money from "./img/money.png";
import HomeCard from "../../../components/client/homeCard/HomeCard";

function Home() {
  return (
    <Fragment>
      <>
        <div className="row py-5">
          <div className="col-lg-8 col-md-12">
            <div
              className={`h-100 d-flex flex-column align-items-center ${style.padd}`}
            >
              <p>
                Her yıl Dünya’da üretilen{" "}
                <span className="fw-semibold" style={{fontSize:"17px"}}>
                  gıdaların yaklaşık %30’u çöpe gitmekte  
                </span>{" "}
                 ve toplam{" "}
                <span className="fw-semibold" style={{fontSize:"17px"}}>
                   karbon ayak izinin %10’u israftan kaynaklanmaktadır.
                </span>
              </p>
              <p>
                Yeriz Mobil Uygulaması ile restoran, kafe ve otel gibi
                işletmeler; ürettikleri temiz, güvenilir, taze rezerv gıda
                ürünlerini uygun ücretle rezervasyona açacak, kullanıcılar da bu
                gıdayı uygulama üzerinden yapacakları rezervasyon ile
                restorandan teslim alacaklardır.
              </p>
              <p>
                Bu döngü sayesinde restaurantların, kafelerin ve otellerin gıda
                israfı kaynaklı ortaya çıkardığı olumsuzluklar ortadan
                kalkacaktır. Ayrıca şatışı gerçekleşemeyen gıdalar üzerinden
                işletmeler kazanç elde edeceklerdir.
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-md-none d-lg-block">
            <div className={style.imgBox}>
              <img
                src={altTabak}
                className={`img-fluid ${style.alttabak}`}
                alt="Alt Tabak"
              />
              <img
                src={tabak}
                className={`img-fluid ${style.tabak}`}
                alt="Tabak"
              />
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="row pt-5">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <HomeCard
                icon={face}
                title={"SOSYAL ETKİ"}
                text={
                  "Yılda 2,5 milyar ton gıda israf olurken, her gün 828 milyon insan aç kalıyor."
                }
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <HomeCard
                icon={plant}
                title={"ÇEVRESEL ETKİ"}
                text={
                  "Gıda atıkları, sera gazı emisyonlarının %10'undan sorumludur."
                }
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <HomeCard
                icon={money}
                title={"EKONOMİK ETKİ"}
                text={"Gıda israfı her yıl 1,2 trilyon dolara mal oluyor."}
              />
            </div>
          </div>
        </div>
        <div className="row py-5">
          <h5 className={style.header}>Nasıl Çalışır?</h5>
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <div className={style.gif}>
              <img src={gif} className="img-fluid" alt="gif" />
            </div>
          </div>
        </div>
        <div className="row py-5">
          <h5 className={`py-5 ${style.header}`}>
            Sürdürülebilir Kalkınma Amaçlarımız
          </h5>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={SKA2} className="img-fluid" alt="SKA2" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={SKA11} className="img-fluid" alt="SKA11" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={SKA12} className="img-fluid" alt="SKA12" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={SKA17} className="img-fluid" alt="SKA17" />
          </div>
        </div>
      </>
    </Fragment>
  );
}

export default Home;
