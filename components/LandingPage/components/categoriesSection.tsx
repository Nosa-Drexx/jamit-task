import styles from "../styles/categorySection.module.css";
import CategoryManager from "./categoryManager";

const CategoriesSection = () => {
  return (
    <section id="categories" className={styles.categorySection}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryText}>
          <h2>Podcast Categories</h2>
          <p>Podcast categories to select from</p>
        </div>
        <CategoryManager />
      </div>
    </section>
  );
};

export default CategoriesSection;
