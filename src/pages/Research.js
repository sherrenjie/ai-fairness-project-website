import React from "react";

const Research = () => {
  return (
    <div style={styles.container}>
      <h2>Research on Gender Bias in AI Recruitment</h2>
      <p>
        Our research leverages existing literature on fairness-aware machine
        learning to explore how biased historical data can distort algorithmic
        decision-making, particularly in the hiring context.
      </p>
      <p>Below is a brief overview of key concepts we investigate:</p>
      <ul>
        <li>
          <strong>Explainable AI (XAI):</strong> Tools like LIME and SHAP help
          us understand which features most heavily influence hiring decisions,
          revealing potential biases.
        </li>
        <li>
          <strong>Counterfactual Fairness:</strong> We assess model outputs by
          hypothetically altering a candidate’s gender, measuring how
          predictions shift.
        </li>
        <li>
          <strong>Causal Inference:</strong> Identifying direct discrimination
          vs. indirect pathways of bias through structural causal models.
        </li>
      </ul>
      <p>
        For more detailed findings, please refer to the in-depth papers and
        references provided below.
      </p>
      <h3>Key References</h3>
      <ol>
        <li>Barocas & Selbst (2016). Big data’s disparate impact.</li>
        <li>Rudin (2019). Interpretable models vs. black box models.</li>
        <li>Corbett-Davies & Goel (2018). Fair machine learning.</li>
        <li>Lundberg & Lee (2017). SHAP for model explanations.</li>
      </ol>
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

export default Research;
