import React from "react";
import { Post } from "@/types/index";
import { getPosts } from "@/services/post/postService";
import BlogPostCard from "../BlogPostCard/BlogPostCard";
import {
  CardContainer,
  StyledPostList,
} from "@/styles/Posts/BlogPostCardStyles";
import styled from "styled-components";
import Title from "@/components/UI/Title";

interface PostListProps {
  limit?: number; // Optional prop to limit the number of posts
}

const BlogPostList: React.FC<PostListProps> = ({ limit }) => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      const limitedPosts = limit ? posts.slice(0, limit) : posts;
      setPosts(limitedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <StyledPostList>
      <Title level={1}>Blog Post List</Title>
      <CardContainer>
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </CardContainer>
    </StyledPostList>
  );
};

export default BlogPostList;
