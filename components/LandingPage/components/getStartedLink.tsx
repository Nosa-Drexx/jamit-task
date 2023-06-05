import Link from "next/link";
import styles from "../styles/getStarted.module.css";

const GetStartedLink = () => {
  return (
    <Link href="#signup" className={styles.getStartedLink}>
      Get Started
    </Link>
  );
};

export default GetStartedLink;
