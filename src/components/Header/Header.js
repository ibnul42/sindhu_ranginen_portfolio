import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  useEffect(() => {
    // Wrap every letter in a span
    // var textWrapper = document.querySelector(".ml12");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );
    // const anime = document.querySelector(".ml12");
    // anime
    //   .timeline({ loop: true })
    //   .add({
    //     targets: ".ml12 .letter",
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: "easeOutExpo",
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i,
    //   })
    //   .add({
    //     targets: ".ml12 .letter",
    //     translateX: [0, -30],
    //     opacity: [1, 0],
    //     easing: "easeInExpo",
    //     duration: 1100,
    //     delay: (el, i) => 100 + 30 * i,
    //   });
  });
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h3
            className="ml12"
            style={{
              fontWeight: 400,
              fonstSize: "1.2em",
              letterSpacing: "0.1em",
            }}
          >
            Sindhu Ranginen
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/#projects">Projects</Nav.Link>
            <Nav.Link href="/#skills">Skills</Nav.Link>
            <Nav.Link href="/#experience">Experience</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link> */}

            <Link to='/' className="link_style" > Home </Link>
            <Link to='/about' className="link_style" > About me </Link>

          </Nav>
          <Nav xs={12} className="d-flex flex-row " >
            <Nav.Link href="#" >
              <i >
                <AiFillGithub size="30px" />
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i>
                <AiFillTwitterCircle size="30px" />
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i>
                <BsFacebook size="30px" />
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i>
                <AiFillInstagram size="30px" />
              </i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
