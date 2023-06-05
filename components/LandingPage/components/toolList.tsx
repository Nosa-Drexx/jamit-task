import styles from "../styles/toolList.module.css";

const ToolList = () => {
  return (
    <div className={styles.analysis}>
      <div className={styles.analysisList}>
        <h3 style={{ color: "#f5a623" }}>Reporting & Analysis</h3>
        <p>Easy to understand stats</p>
      </div>
      <div className={styles.analysisList}>
        <h3 style={{ color: "#4a90e2" }}>Podcast Directory</h3>
        <p>Get listened Everywhere</p>
      </div>
      <div className={styles.analysisList}>
        <h3 style={{ color: "#8b63c8" }}>Monetization Tools</h3>
        <p>Listner support</p>
      </div>
      <div className={styles.analysisList}>
        <h3 style={{ color: "#92c13c" }}>Publishing for Everyone</h3>
        <p>Easily create and publish episodes</p>
      </div>
    </div>
  );
};

export default ToolList;
