import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>
        Interested in collaborating, sharing datasets, or learning more? We’d
        love to hear from you.
      </p>
      <p>
        Please reach out via the form below or send us an email at:
        <strong> sherrenjielita@brandeis.edu</strong>
      </p>
      <form style={styles.form}>
        <label style={styles.label}>Name</label>
        <input type="text" style={styles.input} placeholder="Your Name" />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          style={styles.input}
          placeholder="your.email@example.com"
        />

        <label style={styles.label}>Message</label>
        <textarea
          style={styles.textarea}
          placeholder="Your Message..."
          rows={4}
        />

        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#1f2937",
    color: "white",
    cursor: "pointer",
  },
};

export default Contact;
