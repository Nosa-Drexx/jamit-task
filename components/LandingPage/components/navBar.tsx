"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GetStartedLink from "./getStartedLink";
import styles from "../styles/navBar.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useViewPort from "@/app/hooks/useViewPort";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const variantContainer = {
  open: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [animateNav, setAnimateNav] = useState(false);
  const { currentViewPortWidth } = useViewPort();
  const minMobileSizeForNav = 991;
  const navList = ["Categories", "Podcasts", "Users", "Tools"];

  /* useEffect to animate for different screen size */
  useEffect(() => {
    if (currentViewPortWidth > minMobileSizeForNav) {
      //Animate for bigger screens
      setAnimateNav(true);
    } else if (currentViewPortWidth < minMobileSizeForNav) {
      //Animate for mobile, even when browser has been resized
      if (animateNav && !openNav) setAnimateNav(false);
    }
  }, [openNav, currentViewPortWidth]);

  return (
    <Navbar
      as={motion.nav}
      collapseOnSelect
      expand="lg"
      bg="yellowgreen"
      className={styles.navBackground}
      variant="light"
      sticky="top"
      initial={"closed"}
      animate={animateNav ? "open" : "closed"}
    >
      <Container>
        <Navbar.Brand as={motion.div} href="#home">
          Jamit
        </Navbar.Brand>
        <Navbar.Toggle
          as={motion.div}
          onClick={() => {
            setOpenNav(!openNav);
            setAnimateNav(!animateNav);
          }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse as={motion.div} id="responsive-navbar-nav">
          <Nav as={motion.nav} variants={variantContainer} className="me-auto">
            {navList.map((element) => (
              <Nav.Link
                as={motion.a}
                key={element}
                onClick={() => {
                  if (currentViewPortWidth <= minMobileSizeForNav) {
                    setOpenNav(false);
                    setAnimateNav(false);
                  }
                }}
                variants={itemVariants}
                href={`#${element[0].toLowerCase()}${element.slice(
                  1,
                  element.length
                )}`}
              >
                {element}
              </Nav.Link>
            ))}
          </Nav>
          <Nav as={motion.nav} variants={variantContainer}>
            <Nav.Link
              as={motion.a}
              variants={itemVariants}
              onClick={() => {
                if (currentViewPortWidth <= minMobileSizeForNav) {
                  setOpenNav(false);
                  setAnimateNav(false);
                }
              }}
              href="#login"
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={motion.a}
              variants={itemVariants}
              onClick={() => {
                if (currentViewPortWidth <= minMobileSizeForNav) {
                  setOpenNav(false);
                  setAnimateNav(false);
                }
              }}
              eventKey={2}
              href="#signup"
            >
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
