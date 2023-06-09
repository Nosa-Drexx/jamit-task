import styles from "../styles/featuredUserSection.module.css";
import UsersCarousel from "./userCarousel";

const FeaturedUserSection = () => {
  return (
    <section id="users" className={styles.usersSection}>
      <div className={styles.usersContainer}>
        <div className={styles.usersText}>
          <h2>What some of our client say</h2>
          <p>Jamit is the better option, Podcasting has never been easier</p>
        </div>
        <UsersCarousel />
      </div>
    </section>
  );
};

export default FeaturedUserSection;
