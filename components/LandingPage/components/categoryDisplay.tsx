import Card from "react-bootstrap/Card";
import styles from "../styles/categoryDisplay.module.css";

const CategoryDisplay = ({ categories }) => {
  return (
    <div className={styles.categoryDisplay}>
      {categories.map((category) => (
        <Card key={category.title} style={{ width: "18rem" }}>
          {/* Animated top */}
          <Card.Header
            style={{
              backgroundColor: category.color,
              backgroundImage: category.gradient,
              height: "5px",
              backgroundSize: "400% 400%",
            }}
            className={styles.cardHeader}
          />

          {/* Card Contents */}
          <Card.Body>
            <Card.Title>{category.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {category.host}
            </Card.Subtitle>
            <Card.Text>{category.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CategoryDisplay;
