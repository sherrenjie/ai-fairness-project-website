import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Addressing Gender Bias in AI Recruitment Tools
      </h1>

      <p style={styles.paragraph}>
        Welcome to our collaborative research initiative between
        <strong> Sherren Jielita (Brandeis University) </strong>
        and
        <strong>
          {" "}
          Prof. Mohannad Elhamod (Questrom School of Business, Boston
          University)
        </strong>
        . Our work focuses on designing and implementing fairness-aware machine
        learning techniques to proactively mitigate gender bias in AI-driven
        hiring practices.
      </p>

      <p style={styles.paragraph}>
        This endeavor tackles the pressing challenge of gender bias in AI
        recruitment tools—systems that, due to historically skewed data and
        systemic inequalities, may inadvertently overlook or undervalue
        <strong> women</strong>. As automated screening becomes more prevalent,
        these models risk reinforcing existing disparities by perpetuating
        subtle biases embedded in their training data.
      </p>

      <p style={styles.paragraph}>
        Our platform serves as an entry point to showcase the latest research,
        demonstrations, and best practices for fostering equitable hiring
        outcomes. By centering women’s experiences and analyzing real-world
        datasets, we highlight the importance of detecting and mitigating bias
        at every juncture of the AI pipeline.
      </p>

      <p style={styles.paragraph}>
        Through rigorous empirical research, hands-on experimentation with
        fairness-focused ML libraries, and close collaborations with HR and tech
        partners, we aim to develop a robust toolkit that organizations can
        adopt to build more fair, transparent, and inclusive hiring processes.
        We invite you to explore our <strong>Research</strong> findings, learn
        about the <strong>Methods</strong> we employ, or reach out via our
        <strong> Contact</strong> page to learn how you can get involved.
      </p>

      {/* Highlight Box for urgency, context, and reference to Amazon's example */}
      <div style={styles.highlightBox}>
        <h2 style={styles.highlightHeading}>Why This Research Matters Now</h2>
        <p style={styles.highlightParagraph}>
          Recent administrative trends indicate a rollback of{" "}
          <strong>DEI (Diversity, Equity, and Inclusion) initiatives</strong> in
          various sectors. These cutbacks threaten to diminish the resources
          needed to address systemic biases and promote equitable hiring.
          Simultaneously, <strong>real-world examples</strong> underscore the
          stakes: Amazon famously
          <em> scrapped its AI recruiting tool </em>
          after discovering it penalized applicants for identifying as or
          referencing <strong>women</strong>. This case study highlights how
          easily machine learning models can inherit—and amplify—inequalities
          when trained on historically skewed data.
        </p>

        <p style={styles.highlightParagraph}>
          Our project is <strong>ongoing</strong> and will continue to evolve
          over the summer. We remain committed to <strong>transparency</strong>
          in both our methodologies and funding. Detailed disclosures about
          resource allocation and progress milestones will be shared publicly to
          ensure accountability and to encourage a broader conversation on how
          AI can serve everyone fairly—especially in an era when dedicated DEI
          programs are increasingly at risk.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "3rem 2rem",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  paragraph: {
    textAlign: "justify",
    lineHeight: 1.6,
    marginBottom: "1.5rem",
  },
  highlightBox: {
    marginTop: "2rem",
    padding: "1.5rem",
    backgroundColor: "#fafafa",
    borderLeft: "4px solid #1f2937",
    borderRadius: "4px",
  },
  highlightHeading: {
    marginTop: 0,
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  highlightParagraph: {
    textAlign: "justify",
    lineHeight: 1.6,
    marginBottom: "1rem",
  },
};

export default Home;
