"use client";
import styles from "../styles/featuredUserSection.module.css";
import UsersCarousel from "./userCarousel";
import { motion } from "framer-motion";

const textVariant = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hide: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const FeaturedUserSection = () => {
  return (
    <section id="users" className={styles.usersSection}>
      <div className={styles.usersContainer}>
        <motion.div
          variants={textVariant}
          initial={"hide"}
          whileInView={"show"}
          className={styles.usersText}
        >
          <h2>What some of our client say</h2>
          <p>Jamit is the better option, Podcasting has never been easier</p>
        </motion.div>
        <UsersCarousel />
      </div>
    </section>
  );
};

export default FeaturedUserSection;
