import React from "react";
import style from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../../assets/images/icons/logo.svg";
import instagram from "../../../assets/images/icons/instagram.png";
import linkedin from "../../../assets/images/icons/linkedin.png";
import hamburger from "../../../assets/images/icons/hamburgerMenu.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <span className="d-flex gap-3">
            <Link className={style.border} href="#" target="_blank">
              <img src={linkedin} alt="Linkedin Logo" />
            </Link>
            <Link className={style.border} href="#" target="_blank">
              <img src={instagram} alt="Instagram Logo" />
            </Link>
          </span>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="45"
              className="d-inline-block align-top"
              alt="Yeriz Logo"
            />
          </Navbar.Brand>

          <Dropdown className={style.Dropdown}>
            <Dropdown.Toggle className={style.border} id="dropdown-basic">
              <img src={hamburger} alt="menu" />
            </Dropdown.Toggle>

            <Dropdown.Menu className={style.menu}>
              <Dropdown.Item href="/hakkimizda" className={style.item}>
                Hakkımızda
              </Dropdown.Item>
              <Dropdown.Item href="/surdurulebilirblog" className={style.item}>
                Sürdürülebilir Blog
              </Dropdown.Item>
              <Dropdown.Item href="mailto:ranagulcin@gmail.com" className={style.item}>
                Bize Ulaşın
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
