"use client";
import Image from "next/image";
import styles from "../styles/toolSection.module.css";
import ToolList from "./toolList";
import { motion } from "framer-motion";

const mainTextVariant = {
  inView: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  notInView: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const imageVariant = {
  inView: {
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  notInView: { opacity: 0, transition: { duration: 0.2 } },
};

const staggerVariant = {
  inView: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const ToolSection = () => {
  return (
    <motion.section
      initial={"notInView"}
      whileInView={"inView"}
      id="tools"
      className={styles.toolSection}
    >
      <motion.div variants={staggerVariant} className={styles.toolsContainer}>
        <motion.div variants={mainTextVariant} className={styles.toolSection}>
          <h2>Easy and Powerful Tools</h2>
          <p>Everything you need to have a successful podcast</p>
        </motion.div>
        <motion.div className={styles.tools}>
          <motion.div variants={imageVariant} className={styles.graphContainer}>
            <Image
              className={styles.graph}
              src={require("../images/graph.png")}
              alt="graph"
            />
          </motion.div>
          <motion.div className={styles.toolList}>
            <ToolList />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ToolSection;
