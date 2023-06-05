import styles from "../styles/featurePodcast.module.css";
import FeaturedPodcastList from "../components/featuredPodcastList";

const FeaturedPodcastSection = () => {
  return (
    <section id="podcasts" className={styles.podcastSection}>
      <div className={styles.podcastContainer}>
        <div className={styles.podcastText}>
          <h2>Featured Podcast </h2>
          <p>Some Featured Podcasts</p>
        </div>
        <FeaturedPodcastList />
      </div>
    </section>
  );
};

export default FeaturedPodcastSection;
