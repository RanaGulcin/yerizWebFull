import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={style.footerBg}>
        <div className="container h-100 d-flex align-items-center">
          <div>&copy; Yeriz </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
