import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={style.footerBg}>
        <div className="container h-100 d-flex align-items-center gap-5">
          <Link href="#" className={style.links}>Gizlilik Sözleşmesi</Link>
          <Link href="#" className={style.links}>KVKK</Link>
          <Link href="#" className={style.links}>Çerez Politikası</Link>
          <Link href="#" className={style.links}>S.S.S</Link>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
