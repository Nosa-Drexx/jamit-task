"use client";
import Nav from "react-bootstrap/Nav";
import { categoriesSelector } from "../libs/categories";
import styles from "../styles/categoryTab.module.css";

function CategoryTab({ categories, setCategoriesToDisplay }) {
  const handleSelect = (eventKey) => {
    setCategoriesToDisplay(() => categoriesSelector(categories, eventKey));
  };

  return (
    <Nav
      variant="pills"
      defaultActiveKey="#"
      onSelect={handleSelect}
      className={styles.tab}
    >
      <Nav.Item>
        <Nav.Link href="#" eventKey="All">
          All
        </Nav.Link>
      </Nav.Item>
      {categories.map((podcast) => (
        <Nav.Item key={podcast.category_name}>
          <Nav.Link eventKey={podcast.category_name}>
            {podcast.category_name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CategoryTab;
