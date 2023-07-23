"use client";
import podcastCategories from "@/data/podcastCategories.json";
import styles from "../styles/featuredPodcastList.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hide: { opacity: 0, x: 20, transition: { duration: 0.2 } },
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

const FeaturedPodcastList = () => {
  const [podcast, setPodcast] = useState(podcastCategories.categories);
  const [featuredPodcast, setFeaturedPodcast] = useState([]);

  useEffect(() => {
    const featured = [];
    for (let elem of podcast) {
      //not more than 7 featured posts
      if (featured.length >= 7) {
        break;
      }
      featured.push(...elem.podcasts);
    }
    setFeaturedPodcast(() => featured);
  }, []);

  return (
    <motion.div
      variants={variantContainer}
      initial={"hide"}
      whileInView={"show"}
      className={styles.listContainer}
    >
      {featuredPodcast.map((elem) => (
        <motion.div
          variants={itemVariants}
          className={styles.list}
          key={elem.title}
        >
          {elem.title}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedPodcastList;
