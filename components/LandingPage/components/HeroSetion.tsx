"use client";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import GetStartedLink from "./getStartedLink";
import { motion } from "framer-motion";

const mainTextVariant = {
  offScreen: {
    x: -30,
    opacity: 0,
  },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const opacityVariant = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const staggerTransition = {
  type: "spring",
  bounce: 0,
  duration: 0.7,
  delayChildren: 0.2,
  staggerChildren: 0.1,
};

const staggerVariant = {
  onScreen: {
    transition: staggerTransition,
  },
  offScreen: {
    transition: staggerTransition,
  },
};

function HeroSection() {
  return (
    <motion.section
      id="home"
      className={styles.hero}
      initial={"offScreen"}
      whileInView={"onScreen"}
    >
      <motion.div className={styles.heroContainer} variants={staggerVariant}>
        <motion.div className={styles.heroText}>
          <motion.div variants={staggerVariant}>
            <motion.h1 className={styles.mainText} variants={mainTextVariant}>
              <span>Podcast</span> Monetization Made Easy
            </motion.h1>
            <motion.p variants={opacityVariant}>
              Welcome to the world of podcasting, where your voice can reach
              millions of eager listeners around the globe. If you have a
              passion for storytelling, sharing knowledge, or simply connecting
              with an audience, starting your own podcast is a fantastic way to
              make your mark in the digital real with easy hosting and
              monetization to help you kickstart your journey as a podcaster.
            </motion.p>
            <motion.div
              variants={mainTextVariant}
              className={styles.btnContainer}
            >
              <GetStartedLink />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={opacityVariant} className={styles.imageContainer}>
          <Image
            className={styles.heroImage}
            src={require("../images/HeroPodcast.jpg")}
            alt="podcasts"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
