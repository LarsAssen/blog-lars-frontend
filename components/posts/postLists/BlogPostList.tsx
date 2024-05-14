import React from "react";
import { Post } from "@/types/index";
import { getPosts } from "@/services/post/postService";
import BlogPostCard from "../BlogPostCard";
import { CardContainer } from "@/styles/Posts/BlogPostCardStyles";
import styled from "styled-components";

const BlogPostList: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const StyledPostList = styled.div`
   margin: 50px auto;
   `;

  return (
    <StyledPostList>
      <h1>Blog Post List</h1>
      <CardContainer>
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
      </CardContainer>
    </StyledPostList>
  );
};

export default BlogPostList;