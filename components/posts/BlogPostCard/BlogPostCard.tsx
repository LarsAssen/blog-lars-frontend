import type { Post } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import Title from "../../UI/Title";
import Button from "../../UI/Button";
import styles from "./BlogPostCard.module.scss";
import { Calendar, Clock, ArrowRight } from "react-feather";

const BlogPostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.card}>
      <a href={`/posts/${post.Slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <img
            src={post.HeaderImage}
            alt={post.Title}
            className={styles.image}
          />
          <span className={styles.categoryBadge}>{post.category}</span>
        </div>
        <div className={styles.cardHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.date}>
              <Calendar className={styles.icon} />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <div className={styles.readingTime}>
              <Clock className={styles.icon} />
              {post.ReadTime} min read
            </div>
          </div>
          <h3 className={styles.title}>{post.Title}</h3>
          <p className={styles.description}>{post.Description}</p>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.readMore}>
            Read More
            <ArrowRight className={styles.readMoreIcon} />
          </span>
        </div>
      </a>
    </div>
  );
};

export default BlogPostCard;
