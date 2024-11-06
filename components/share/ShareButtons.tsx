import React, { useState } from "react";
import {
  ThumbsUp,
  Share,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "react-feather";
import styles from "./ShareButtons.module.scss";
import Button from "../UI/Button";

const ShareButtons = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <Button className={styles["like-button"]} onClick={handleLike}>
        <ThumbsUp /> {likeCount} Likes
      </Button>
      <div className={styles["share-buttons"]}>
        <Button variant="outline">
          <Share /> Share
        </Button>
        <Button variant="outline">
          <Facebook />
        </Button>
        <Button variant="outline">
          <Twitter />
        </Button>
        <Button variant="outline">
          <Linkedin />
        </Button>
        <Button variant="outline">
          <Mail />
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;
