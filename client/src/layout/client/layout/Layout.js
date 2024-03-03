import React, { Fragment } from "react";
import style from "./Layout.module.css";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <Fragment>
      <div className={style.layout}>
        <Header />
        <section className={style.mainSection}>
          <div className="container">
            <Outlet />
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
