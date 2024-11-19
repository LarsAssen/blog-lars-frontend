import type React from "react";
import { useEffect, useRef, useState } from "react";
import { OverlayContainer, useOverlay, useModal, useDialog } from "react-aria";
import styles from "./NewsletterPopup.module.scss";
import Button from "@/components/UI/Button";

const NewsletterPopup = ({ close }: { close: () => void }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const { overlayProps } = useOverlay({ isOpen: true, onClose: close }, ref);
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog({}, ref);

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
      await fetchUpdatedCount();
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <OverlayContainer>
      <div
        className={styles.overlayBackground}
        onClick={close}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            close();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Close"
      />
      <div
        className={styles.modal}
        {...overlayProps}
        {...modalProps}
        {...dialogProps}
        ref={ref}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={close}
          aria-label="Close"
        >
          ✕
        </button>
        <h2 {...titleProps}>Subscribe to Weekly Insights</h2>
        <p>
          Join a community focused on endurance, wellness, and mindful living.
        </p>
        {subscriberCount !== null && (
          <p>Current Subscribers: {subscriberCount.toLocaleString()}</p>
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              id="email"
              type="email"
              className={styles.emailInput}
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <Button
            className={styles.submitButton}
            size="large"
            variant="primary"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </OverlayContainer>
  );
};

export default NewsletterPopup;
