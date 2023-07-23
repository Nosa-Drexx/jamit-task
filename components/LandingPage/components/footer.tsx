"use client";
import Link from "next/link";
import styles from "../styles/footer.module.css";
import { motion } from "framer-motion";

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
      staggerChildren: 0.05,
    },
  },
};
const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>
        {/* Jamit */}
        <motion.div
          initial={"hide"}
          whileInView={"show"}
          variants={variantContainer}
          className={styles.list}
        >
          <motion.h3 variants={itemVariants}>Jamit</motion.h3>
          <motion.ul
            initial={"hide"}
            whileInView={"show"}
            variants={variantContainer}
            transition={{ delay: 0.2 }}
          >
            <motion.li variants={itemVariants}>
              <Link href="#features">Features</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#subscription">Subscription</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#pricing">pricing</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#users">Customer Reviews</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#login">Login</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#signup">SignUp</Link>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={"hide"}
          whileInView={"show"}
          variants={variantContainer}
          className={styles.list}
        >
          <motion.h3 variants={itemVariants}>Resources</motion.h3>
          <motion.ul
            initial={"hide"}
            whileInView={"show"}
            variants={variantContainer}
            transition={{ delay: 0.2 }}
          >
            <motion.li variants={itemVariants}>
              <Link href="#features">How to start a podcast</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#subscription">Blog</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#pricing">What is new</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#users">Platform Stats</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#login">Jamit API</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#signup">Wordpress Plugin</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#help">Help</Link>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={"hide"}
          whileInView={"show"}
          variants={variantContainer}
          className={styles.list}
        >
          <motion.h3 variants={itemVariants}>Legal</motion.h3>
          <motion.ul
            initial={"hide"}
            whileInView={"show"}
            variants={variantContainer}
            transition={{ delay: 0.2 }}
          >
            <motion.li variants={itemVariants}>
              <Link href="#privacy">Privacy & Policy</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#terms">Terms & Conditions</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#dmca">DMCA</Link>
            </motion.li>
          </motion.ul>
          <motion.div
            initial={"hide"}
            whileInView={"show"}
            className={styles.socials}
          >
            <motion.a
              variants={itemVariants}
              href="mailto: hello@support.jamit"
            >
              hello@support.jamit
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
