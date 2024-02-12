import React, {Fragment} from "react";
import style from "./Layout.module.css";
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <Fragment>
      <Header />
      <section className={style.mainSection}>
        <div>
          <Outlet />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Layout;
