import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "react-feather";

import Title from "@/components/UI/Title";
import Content from "./Content";
import type { Post } from "@/types";
import Button from "@/components/UI/Button";
import styles from "./Article.module.scss";
import ShareButtons from "../../share/ShareButtons";
import PostNewsletterForm from "@/components/newsletter/PostNewsletterForm";

const Article: React.FC<{ post: Post }> = ({ post }) => {
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
          <p>{post.Subtitle || "Subtitle goes here"}</p>
          <div className={styles["info-row"]}>
            <Calendar /> {post.publishedAt || "Date"}
            <Clock /> {post.ReadTime || "Read time"}
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className={styles["back-button"]}>
        <Link href="/posts" passHref>
          <Button>Back to posts</Button>
        </Link>
      </div>

      {/* <div className={styles["title-container"]}>
        <Title level={1}>{post.Title}</Title>
      </div> */}

      <div className={styles["category-pill"]}>
        <span>{post.category}</span>
      </div>

      <div className={styles["tags-container"]}>
        {post.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      {/* <div className={styles["header-image"]}>
        <Image
          src={post.HeaderImage}
          alt={post.Title}
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      <Content content={post.Content} />

      <ShareButtons />
      <PostNewsletterForm />
    </div>
  );
};

export default Article;
