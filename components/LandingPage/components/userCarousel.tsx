"use client";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/userCarousel.module.css";
import Image from "next/image";

function UsersCarousel() {
  return (
    <Carousel
      className={styles.carouselContainer}
      variant="dark"
      controls={false}
    >
      <Carousel.Item className={styles.carouselItem}>
        <div className={styles.user}>
          <p>
            I absolutely love using Jamit Podcast Hosting and Monetization Site.
            The platform offers an incredibly user-friendly interface that makes
            it a breeze to upload, manage, and distribute my podcast episodes.
            The hosting capabilities are top-notch, ensuring that my content is
            always accessible and delivered smoothly to my listeners. Moreover,
            the monetization features have been a game-changer for me.
          </p>
          <Image
            src={require("../images/chribael Anna.jpg")}
            alt="user image"
            className={styles.userImage}
            width={70}
            height={70}
          />
        </div>
        <Carousel.Caption>
          <h3 className={styles.author}>Anna Christable</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <div className={styles.user}>
          <p>
            {`Jamit Podcast Hosting and Monetization Site has been a game-changer
            for me as a podcaster. The platform's analytics and insights have
            provided me with invaluable data to understand my audience better. I
            can easily track my podcast's performance, audience demographics,
            and engagement metrics, which have helped me tailor my content and
            improve my podcasting strategy. Additionally, Jamit's monetization
            tools have been a fantastic resource.`}
          </p>
          <Image
            src={require("../images/George-Cunney.jpg")}
            alt="user image"
            className={styles.userImage}
            width={70}
            height={70}
          />
        </div>
        <Carousel.Caption>
          <h3 className={styles.author}>George Cunney</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <div className={styles.user}>
          <p>
            {`I can't speak highly enough of Jamit Podcast Hosting and
            Monetization Site. It offers a comprehensive suite of features that
            have made podcasting a breeze for me. The hosting infrastructure is
            reliable and fast, ensuring that my episodes are always available to
            my listeners without any hiccups. I particularly appreciate the
            site's monetization options, as they allow me to monetize my podcast
            in multiple ways. Jamit is a fantastic choice.`}
          </p>
          <Image
            src={require("../images/williams-adebayo.jpg")}
            alt="user image"
            className={styles.userImage}
            width={70}
            height={70}
          />
        </div>
        <Carousel.Caption>
          <h3 className={styles.author}>Williams Adebayo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UsersCarousel;
