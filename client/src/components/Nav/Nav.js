import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Auth from "../../Utils/auth";
import "../Styles/nav.css";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="nav">
      <Menu className="nav" fluid widths={4}>
        <Menu.Item
          name="HOME"
          active={activeItem === "Home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
          id="home"
        />
        <Menu.Item
          name="ARTICLES"
          active={activeItem === "Articles"}
          onClick={handleItemClick}
          as={Link}
          to="/articles"
          id="articles"
        />
        {Auth.loggedIn() ? (
          <>
            <Menu.Item
              name="About Us"
              active={activeItem === "about-us"}
              onClick={handleItemClick}
              as={Link}
              to="/about-us"
              id="about-us"
            />
            <Menu.Item
              name="New Spot"
              active={activeItem === "New Spot"}
              onClick={handleItemClick}
              as={Link}
              to="/newspot"
              id="newspot"
            />
            <Menu.Item
              name="Logout"
              active={activeItem === "Logout"}
              onClick={Auth.logout}
              id="logout"
            />
          </>
        ) : (
          <>
            <Menu.Item
              name="ABOUT US"
              active={activeItem === "login"}
              onClick={handleItemClick}
              as={Link}
              to="/login"
              id="about-us"
            />
            <Menu.Item
              name="SUPPORTERS"
              active={activeItem === "signup"}
              onClick={handleItemClick}
              as={Link}
              to="/resources"
              id="sponsors"
            />
          </>
        )}
      </Menu>
    </div>
  );
}
