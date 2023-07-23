"use client";
import styles from "../styles/categorySection.module.css";
import CategoryManager from "./categoryManager";
import { motion } from "framer-motion";

const textVariant = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hide: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const CategoriesSection = () => {
  return (
    <section id="categories" className={styles.categorySection}>
      <div className={styles.categoryContainer}>
        <motion.div
          initial={"hide"}
          whileInView={"show"}
          variants={textVariant}
          className={styles.categoryText}
        >
          <h2>Podcast Categories</h2>
          <p>Podcast categories to select from</p>
        </motion.div>
        <CategoryManager />
      </div>
    </section>
  );
};

export default CategoriesSection;
