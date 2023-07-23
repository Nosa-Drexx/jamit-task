"use client";
import { useState } from "react";
import styles from "../styles/toolList.module.css";

import { Reorder, motion } from "framer-motion";

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
      staggerChildren: 0.2,
    },
  },
};

const ToolItems = [
  {
    header: "Reporting & Analysis",
    text: "Easy to understand stats",
    color: "#f98a5d",
  },
  {
    header: "Podcast Directory",
    text: "Get listened Everywhere",
    color: "#4a90e2",
  },
  {
    header: "Monetization Tools",
    text: "Listener support",
    color: "#8b63c8",
  },
  {
    header: "Publishing for Everyone",
    text: "Easily create and publish episodes",
    color: "#92c13c",
  },
];

const ToolList = () => {
  const [items, setItems] = useState(ToolItems);
  return (
    <motion.div
      initial={"hide"}
      variants={variantContainer}
      whileInView={"show"}
      className={styles.analysis}
    >
      {/* Framer motion Reorder Animation */}
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item
            key={item.header}
            value={item}
            style={{ listStyleType: "none" }}
          >
            <motion.div variants={itemVariants} className={styles.analysisList}>
              <h3 style={{ color: item.color }}>{item.header}</h3>
              <p>{item.text}</p>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </motion.div>
  );
};

export default ToolList;
