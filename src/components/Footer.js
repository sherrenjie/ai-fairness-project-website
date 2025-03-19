import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} AI Fairness Collaboration</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1f2937",
    color: "white",
    textAlign: "center",
    padding: "1rem 0",
    marginTop: "2rem",
  },
};

export default Footer;
