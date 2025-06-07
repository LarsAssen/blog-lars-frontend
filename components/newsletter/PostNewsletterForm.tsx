import React from "react";
import Title from "../UI/Title";
import styles from "./PostNewsletterForm.module.scss";
import { Button } from "../UI/Button";

const PostNewsletterForm = () => {
  return (
    <div className={styles.newsletter}>
      <Title level={3}>Subscribe to Our Newsletter</Title>
      <p>
        Get the latest ultrarunning tips, training advice, and exclusive content
        delivered to your inbox.
      </p>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ flexGrow: 1 }}
        />
        <Button>Subscribe</Button>
      </form>
    </div>
  );
};

export default PostNewsletterForm;
