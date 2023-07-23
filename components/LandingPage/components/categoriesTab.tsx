"use client";
import Nav from "react-bootstrap/Nav";
import { categoriesSelector } from "../libs/categories";
import styles from "../styles/categoryTab.module.css";
import { motion } from "framer-motion";

const itemVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hide: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const variantContainer = {
  show: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

function CategoryTab({ categories, setCategoriesToDisplay }) {
  const handleSelect = (eventKey) => {
    setCategoriesToDisplay(() => categoriesSelector(categories, eventKey));
  };

  return (
    <Nav
      as={motion.nav}
      variant="pills"
      defaultActiveKey="All"
      onSelect={handleSelect}
      className={styles.tab}
      initial={"hide"}
      whileInView={"show"}
      variants={variantContainer}
    >
      <Nav.Item as={motion.li} variants={itemVariants}>
        <Nav.Link eventKey="All">All</Nav.Link>
      </Nav.Item>
      {categories.map((podcast) => (
        <Nav.Item
          as={motion.li}
          key={podcast.category_name}
          variants={itemVariants}
        >
          <Nav.Link eventKey={podcast.category_name}>
            {podcast.category_name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CategoryTab;
