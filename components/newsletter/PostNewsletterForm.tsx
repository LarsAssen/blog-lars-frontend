import React from "react";
import Title from "../UI/Title";
import Button from "../UI/Button";
import styles from "./PostNewsletterForm.module.scss";

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
