import React from "react";
import { Post } from "@/types/index";
import { getPosts } from "@/services/post/postService";
import BlogPostCard from "../BlogPostCard";
import { CardContainer } from "@/styles/Posts/BlogPostCardStyles";

const BlogPostList: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      console.log(posts[0]);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Post List</h1>
      <CardContainer>
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
      </CardContainer>
    </div>
  );
};

export default BlogPostList;