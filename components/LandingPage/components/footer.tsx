import Link from "next/link";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>
        {/* Jamit */}
        <div className={styles.list}>
          <h3>Jamit</h3>
          <ul>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#subscription">Subscription</Link>
            </li>
            <li>
              <Link href="#pricing">pricing</Link>
            </li>
            <li>
              <Link href="#users">Customer Reviews</Link>
            </li>
            <li>
              <Link href="#login">Login</Link>
            </li>
            <li>
              <Link href="#signup">SignUp</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className={styles.list}>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href="#features">How to start a podcast</Link>
            </li>
            <li>
              <Link href="#subscription">Blog</Link>
            </li>
            <li>
              <Link href="#pricing">What is new</Link>
            </li>
            <li>
              <Link href="#users">Platform Stats</Link>
            </li>
            <li>
              <Link href="#login">Jamit API</Link>
            </li>
            <li>
              <Link href="#signup">Wordpress Plugin</Link>
            </li>
            <li>
              <Link href="#help">Help</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className={styles.list}>
          <h3>Legal</h3>
          <ul>
            <li>
              <Link href="#privacy">Privacy & Policy</Link>
            </li>
            <li>
              <Link href="#terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#dmca">DMCA</Link>
            </li>
          </ul>
          <div className={styles.socials}>
            <a href="mailto: hello@support.jamit">hello@support.jamit</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
