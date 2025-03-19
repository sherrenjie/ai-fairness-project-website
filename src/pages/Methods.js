import React from "react";

const Methods = () => {
  return (
    <div style={styles.container}>
      <h2>Fairness-Aware Methods & Tools</h2>
      <p>
        Our approach to mitigating bias in AI recruitment involves several
        fairness-aware strategies:
      </p>
      <ul>
        <li>
          <strong>Pre-processing Bias Mitigation:</strong> Techniques like
          re-weighting or over/under-sampling ensure balanced datasets.
        </li>
        <li>
          <strong>In-processing Constraints:</strong> Adversarial debiasing or
          regularization methods add fairness objectives directly into model
          training.
        </li>
        <li>
          <strong>Post-processing Adjustments:</strong> Methods like equalized
          odds adjustments or rejection option classification recalibrate model
          outcomes to reduce disparate impact.
        </li>
      </ul>
      <p>
        We utilize popular libraries (e.g., <code>fairlearn</code>) and
        frameworks (e.g., <code>AIF360</code>) for these tasks.
      </p>
      <p>
        Implementations include Jupyter notebooks and Python scripts that
        integrate with real or synthetic hiring datasets to demonstrate how each
        technique can reduce bias in model predictions.
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

export default Methods;
