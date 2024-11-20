import type React from "react";
import type { Post } from "@/types/index";
import BlogPostCard from "../BlogPostCard/BlogPostCard";
import Title from "@/components/UI/Title";
import styles from "./BlogPostList.module.scss";

interface PostListProps {
  posts: Post[]; // The list of posts to display, passed from parent component
}

const BlogPostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.blogPostListContainer}>
      <Title level={2}>Blog Post List</Title>
      <div className={styles.postCounter}>
        {posts.length} {posts.length === 1 ? "Post" : "Posts"} Available
      </div>
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
