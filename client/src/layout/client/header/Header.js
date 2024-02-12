import React from "react";
import style from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./LOGO.png";

function Header() {
  return (
    <header>
      <Navbar expand="lg" className={style.headerBg}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="45"
              className="d-inline-block align-top"
              alt="Yeriz Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={style.navLink} href="/yeriz">
                Yeriz
              </Nav.Link>
              <Nav.Link className={style.navLink} href="/surdurulebilirblog">
                Sürdürülebilir Blog
              </Nav.Link>
              <Nav.Link
                className={style.navLink}
                href="mailto:ranagulcin@gmail.com"
              >
                Bize Ulaşın
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
