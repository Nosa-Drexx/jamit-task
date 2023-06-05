import styles from "../styles/hero.module.css";
import Image from "next/image";
import GetStartedLink from "./getStartedLink";

function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <div>
            <h1 className={styles.mainText}>
              <span>Podcast</span> Monetization Made Easy
            </h1>
            <p>
              Welcome to the world of podcasting, where your voice can reach
              millions of eager listeners around the globe. If you have a
              passion for storytelling, sharing knowledge, or simply connecting
              with an audience, starting your own podcast is a fantastic way to
              make your mark in the digital real with easy hosting and
              monetization to help you kickstart your journey as a podcaster.
            </p>
            <div className={styles.btnContainer}>
              <GetStartedLink />
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.heroImage}
            src={require("../images/HeroPodcast.jpg")}
            alt="podcasts"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
