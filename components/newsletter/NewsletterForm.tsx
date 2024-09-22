import React, { useState, useEffect } from "react";
import styles from "./NewsletterForm.module.scss";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("Subscription successful!");
    } else {
      setMessage(`Error: ${data.error}`);
    }

    setEmail("");
  };

  return (
    <section id="signup" className={styles.newsletterForm}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Join Our Community</h2>
            <p className={styles.subtitle}>
              Sign up for our newsletter to receive the latest insights, tips,
              and exclusive content.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                className={styles.input}
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
