"use client";
import Nav from "react-bootstrap/Nav";
import podcastCategories from "@/data/podcastCategories.json";
import { useState } from "react";

function CategoryTab() {
  const [categories, setCategories] = useState(podcastCategories.categories);
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      {/* <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item> */}
      {categories.map((podcast) => (
        <Nav.Item key={podcast.category_name}>
          <Nav.Link eventKey={podcast.category_name} disabled>
            {podcast.category_name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CategoryTab;
