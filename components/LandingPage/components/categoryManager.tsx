"use client";
import { useEffect, useState } from "react";
import CategoryTab from "./categoriesTab";
import styles from "../styles/categoryManager.module.css";
import podcastCategories from "@/data/podcastCategories.json";
import CategoryDisplay from "./categoryDisplay";
import { categoriesSelector } from "../libs/categories";

const CategoryManager = () => {
  const [categories, setCategories] = useState(podcastCategories.categories);
  const [categoriesToDisplay, setCategoriesToDisplay] = useState([]);

  useEffect(() => {
    const allCategories: any = categoriesSelector(categories, "All");
    setCategoriesToDisplay(() => allCategories);
  }, []);

  return (
    <div className={styles.manager}>
      <div>
        <CategoryTab
          categories={categories}
          setCategoriesToDisplay={setCategoriesToDisplay}
        />
      </div>
      <div className={styles.display}>
        <CategoryDisplay categories={categoriesToDisplay} />
      </div>
    </div>
  );
};

export default CategoryManager;
