import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>AI Fairness for Recruitment</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/research" style={styles.link}>
          Research
        </Link>
        <Link to="/methods" style={styles.link}>
          Methods
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#1f2937",
    color: "white",
  },
  logo: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Navbar;
