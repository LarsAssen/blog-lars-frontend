import React from "react";
import Title from "../UI/Title";
import Button from "../UI/Button";
import styles from "./Comments.module.scss";

const Comments = () => {
  return (
    <div className={styles["comments-section"]}>
      <Title level={3}>Comments</Title>
      <div style={{ marginBottom: "1rem" }}>
        <div>Comments will go here...</div>
      </div>
      <form>
        <textarea placeholder="Leave a comment..." />
        <Button type="submit">Post Comment</Button>
      </form>
    </div>
  );
};

export default Comments;
