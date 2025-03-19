// Add the revised text to your About page component, e.g. About.js

import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h2>About Our Project</h2>
      <p>
        This project addresses the crucial issue of gender bias in AI
        recruitment tools, where systemic inequalities and historical data skew
        can lead to disproportionately adverse outcomes for{" "}
        <strong>women</strong>. As companies increasingly rely on automated
        screening, these systems may inadvertently perpetuate biases that
        overlook or undervalue female candidates, thereby reinforcing existing
        disparities.
      </p>
      <p>
        We’re collaborating across two esteemed institutions—Brandeis University
        and Boston University—to develop fairness-aware algorithms and best
        practices that aim to reduce discrimination and promote equitable
        hiring. By <strong>centering women’s experiences</strong> and analyzing
        real-world datasets, our research highlights how critical it is to
        detect and mitigate gender biases at every step of the AI pipeline.
      </p>
      <p>
        With a combination of rigorous empirical research, hands-on
        experimentation using fairness-focused machine learning libraries, and
        collaboration with industry partners, we seek to create an accessible
        toolkit. Our hope is that HR departments, AI vendors, and researchers
        alike will adopt and adapt these resources, thereby helping ensure more{" "}
        <strong>fair, transparent, and inclusive hiring practices</strong>
        —particularly for women and other underrepresented groups.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
};

export default About;
