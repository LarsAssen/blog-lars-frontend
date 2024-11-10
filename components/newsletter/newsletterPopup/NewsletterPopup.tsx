import type React from "react";
import { useRef, useState } from "react";
import { OverlayContainer, useOverlay, useModal, useDialog } from "react-aria";
import styles from "./NewsletterPopup.module.scss";
import Button from "@/components/UI/Button";
import Link from "next/link";

const NewsletterPopup = ({ close }: { close: () => void }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const { overlayProps } = useOverlay({ isOpen: true, onClose: close }, ref);
  const { modalProps } = useModal();

  const { dialogProps, titleProps } = useDialog({}, ref);

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
        ref={ref} // Attach the ref to the modal
      >
        <h2 {...titleProps}>Subscribe to Weekly Insights</h2>
        <p>
          Join a community focused on endurance, wellness, and mindful living.
        </p>
        <form className={styles.form}>
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
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e as React.FormEvent);
              close();
            }}
          >
            Subscribe
          </Button>
        </form>
      </div>
    </OverlayContainer>
  );
};

export default NewsletterPopup;
