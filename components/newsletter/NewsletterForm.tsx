import type React from "react";
import { useState, useEffect } from "react";
import styles from "./NewsletterForm.module.scss";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);

  // Fetch subscriber count when the component mounts
  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await fetch("/api/subscriber-count");
        const data = await response.json();
        if (response.ok) {
          setSubscriberCount(data.count.data.stats.active_subscriptions);
        } else {
          console.error("Failed to fetch subscriber count:", data.error);
        }
      } catch (error) {
        console.error("Error fetching subscriber count:", error);
      }
    };
    fetchSubscriberCount();
  }, []);

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
      setEmail("");

      // Optionally, fetch the updated subscriber count after a successful subscription
      const fetchUpdatedCount = async () => {
        const response = await fetch("/api/subscriber-count");
        const data = await response.json();
        if (response.ok) {
          setSubscriberCount(data.count.data.stats.active_subscriptions);
        }
      };
      fetchUpdatedCount();
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <section id="signup" className={styles.newsletterForm}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Sign up to my newsletter</h2>
            <p className={styles.subtitle}>
              Get weekly insights on living well—mind, body, and miles. Join the
              journey.
            </p>
            {subscriberCount !== null && (
              <p className={styles.subtitle}>
                Current Subscribers: {subscriberCount.toLocaleString()}
              </p>
            )}
          </div>
          <div className={styles.formWrapper}>
            {message ? (
              <div className={styles.successMessage}>{message}</div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
