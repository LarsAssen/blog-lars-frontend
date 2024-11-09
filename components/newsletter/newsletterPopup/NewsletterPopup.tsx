import React, { useRef, useState } from "react";
import Button from "@/components/UI/Button";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { OverlayContainer, useOverlay, useModal, useDialog } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import styles from "./Hero.module.scss";

function NewsletterPopup({ close }: { close: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { overlayProps } = useOverlay({ isOpen: true, onClose: close }, ref);
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog();

  return (
    <OverlayContainer>
      <div className={styles.overlayBackground} onClick={close} />
      <div
        className={styles.modal}
        {...overlayProps}
        {...modalProps}
        {...dialogProps}
      >
        <h2 {...titleProps}>Subscribe to Weekly Insights</h2>
        <p>
          Join a community focused on endurance, wellness, and mindful living.
        </p>
        <form className={styles.form}>
          <label>
            Email:
            <input type="email" required placeholder="Your email" />
          </label>
          <Button size="large" variant="primary" onClick={close}>
            Subscribe
          </Button>
        </form>
      </div>
    </OverlayContainer>
  );
}
