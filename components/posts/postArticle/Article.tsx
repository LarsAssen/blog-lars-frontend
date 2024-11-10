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
        <div className={styles["header-image-container"]}>
          <Image
            src={post.HeaderImage}
            alt={post.Title}
            layout="fill"
            objectFit="cover"
            className={styles["header-image-content"]}
          />
          <div className={styles["header-overlay"]} />
        </div>
        <div className={styles["breadcrumb-container"]}>
          <nav aria-label="Breadcrumb">
            <Link href="/" passHref>
              Home
            </Link>{" "}
            /
            <Link href="/posts" passHref>
              Blog
            </Link>{" "}
            /<span>Current Post</span>
          </nav>
        </div>

        <div className={styles["title-container"]}>
          <Title level={1}>{post.Title}</Title>
          <p>{post.Subtitle || "Subtitle goes here"}</p>
        </div>

        <div className={styles["info-row"]}>
          <Calendar /> {post.publishedAt || "Date"}
          <Clock /> {post.ReadTime || "Read time"}
        </div>

        <div className={styles["category-pill"]}>{post.category}</div>

        <div className={styles["tags-container"]}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles["tag-pill"]}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className={styles["back-button"]}>
        <Link href="/posts" passHref>
          <Button>Back to posts</Button>
        </Link>
      </div>

      <Content content={post.Content} />

      <ShareButtons />
      <PostNewsletterForm />
    </div>
  );
};

export default Article;
