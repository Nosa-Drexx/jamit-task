"use client";
import styles from "../styles/featurePodcast.module.css";
import FeaturedPodcastList from "../components/featuredPodcastList";
import { motion } from "framer-motion";

const textVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hide: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const FeaturedPodcastSection = () => {
  return (
    <section id="podcasts" className={styles.podcastSection}>
      <div className={styles.podcastContainer}>
        <motion.div
          initial={"hide"}
          whileInView={"show"}
          variants={textVariants}
          className={styles.podcastText}
        >
          <h2>Featured Podcast </h2>
          <p>Some Featured Podcasts</p>
        </motion.div>
        <FeaturedPodcastList />
      </div>
    </section>
  );
};

export default FeaturedPodcastSection;
