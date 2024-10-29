import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  ThumbsUp,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import Title from "@/components/UI/Title";
import Content from "./Content";
import { Post } from "@/types";
import Button from "@/components/UI/Button";
import styles from "@/styles/Posts/Article.module.scss";

const Article: React.FC<{ post: Post }> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42); // Placeholder for initial count

  const handleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  return (
    <div className={styles["post-container"]}>
      {/* Header with Image & Breadcrumb */}
      <header className={styles["header-container"]}>
        <Image
          src={post.HeaderImage}
          alt={post.Title}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles["header-overlay"]} />
        <div className={styles["header-content"]}>
          <nav aria-label="Breadcrumb">
            <Link href="/" passHref>
              Home
            </Link>{" "}
            /
            <Link href="/blog" passHref>
              Blog
            </Link>{" "}
            /<span>Current Post</span>
          </nav>
          <Title level={1}>{post.Title}</Title>
          <p>{post.subtitle || "Subtitle goes here"}</p>
          <div className={styles["info-row"]}>
            <CalendarDays /> {post.date || "Date"}
            <Clock /> {post.readTime || "Read time"}
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className={styles["back-button"]}>
        <Link href="/posts" passHref>
          <Button>Back to posts</Button>
        </Link>
      </div>

      <div className={styles["title-container"]}>
        <Title level={1}>{post.Title}</Title>
      </div>

      <div className={styles["category-pill"]}>
        <span>{post.category}</span>
      </div>

      <div className={styles["tags-container"]}>
        {post.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      <div className={styles["header-image"]}>
        <Image
          src={post.HeaderImage}
          alt={post.Title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Content content={post.Content} />

      {/* Like & Share Buttons */}
      <div style={{ margin: "2rem 0" }}>
        <Button className={styles["like-button"]} onClick={handleLike}>
          <ThumbsUp /> {likeCount} Likes
        </Button>
        <div className={styles["share-buttons"]}>
          <Button variant="outline">
            <Share2 /> Share
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

      {/* Newsletter Subscription */}
      <div className={styles["newsletter"]}>
        <Title level={3}>Subscribe to Our Newsletter</Title>
        <p>
          Get the latest ultrarunning tips, training advice, and exclusive
          content delivered to your inbox.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            style={{ flexGrow: 1 }}
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      {/* Comments Section */}
      <div className={styles["comments-section"]}>
        <Title level={3}>Comments</Title>
        <div style={{ marginBottom: "1rem" }}>
          {/* Replace with dynamic comment rendering */}
          <div>Comments will go here...</div>
        </div>
        <form>
          <textarea placeholder="Leave a comment..." />
          <Button type="submit">Post Comment</Button>
        </form>
      </div>
    </div>
  );
};

export default Article;
