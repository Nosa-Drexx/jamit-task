import Card from "react-bootstrap/Card";
import styles from "../styles/categoryDisplay.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isForOfStatement } from "typescript";

const cardVariant = {
  show: {
    opacity: 1,
    y: 0,
    // transition: {
    //   type: "spring",
    //   stiffness: 300,
    //   damping: 24,
    // },
  },
  hide: {
    opacity: 1,
    y: 10,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

const variantContainer = {
  show: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const CategoryDisplay = ({ categories }) => {
  const [categoriesWithDelay, setCategoriesWithDelay] = useState([]);

  //Add Delay effect for value for items
  useEffect(() => {
    let delayFor = 0;
    const delayIncrementBy = 0.07;
    const newCategories = categories.map((items) => {
      items["delay"] = delayFor;
      delayFor += delayIncrementBy;
      return items;
    });

    setCategoriesWithDelay(() => newCategories);
  }, [categories]);

  return (
    <motion.div className={styles.categoryDisplay}>
      <AnimatePresence mode="wait">
        {categoriesWithDelay.map((category) => (
          <Card
            as={motion.div}
            variants={cardVariant}
            initial={"hide"}
            animate={"show"}
            exit={"exit"}
            transition={{ duration: 0.2, delay: category.delay }}
            key={category.title}
            style={{ width: "18rem" }}
          >
            {/* Animated top */}
            <Card.Header
              style={{
                backgroundColor: category.color,
                backgroundImage: category.gradient,
                height: "5px",
                backgroundSize: "400% 400%",
              }}
              className={styles.cardHeader}
            />

            {/* Card Contents */}
            <Card.Body>
              <Card.Title>{category.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {category.host}
              </Card.Subtitle>
              <Card.Text>{category.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CategoryDisplay;
