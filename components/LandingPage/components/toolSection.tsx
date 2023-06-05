import Image from "next/image";
import styles from "../styles/toolSection.module.css";
import ToolList from "./toolList";

const ToolSection = () => {
  return (
    <section id="tools" className={styles.toolSection}>
      <div className={styles.toolsContainer}>
        <div className={styles.toolSection}>
          <h2>Easy and Powerful Tools</h2>
          <p>Everything you need to have a successful podcast</p>
        </div>
        <div className={styles.tools}>
          <div className={styles.graphContainer}>
            <Image
              className={styles.graph}
              src={require("../images/graph.png")}
              alt="graph"
            />
          </div>
          <div className={styles.toolList}>
            <ToolList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
