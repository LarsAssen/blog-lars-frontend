import React, { useEffect, useState } from "react";
import { Post } from "@/types/index";
import { getPosts } from "@/services/post/postService";
import BlogPostCard from "../BlogPostCard";
import {
  CardContainer,
  StyledPostList,
} from "@/styles/Posts/BlogPostCardStyles";
import styled from "styled-components";
import Title from "@/components/UI/Title";
import { animated, useTransition } from "@react-spring/web";

interface PostListProps {
  limit?: number; // Optional prop to limit the number of posts
}

const BlogPostList: React.FC<PostListProps> = ({ limit }) => {
  const [inView, setInView] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      const limitedPosts = limit ? posts.slice(0, limit) : posts;
      setPosts(limitedPosts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );
    const element = document.querySelector("#post-list");
    if (!element) return;

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const transitions = useTransition(inView ? posts : [], {
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    trail: 100, // Delay between each item
  });

  return (
    <div id="post-list">
      <StyledPostList>
        <Title level={1}>Blog Post List</Title>
        <CardContainer>
          {transitions((style, post) => (
            <animated.div style={style}>
              <BlogPostCard key={post.id} post={post} />
            </animated.div>
          ))}
        </CardContainer>
      </StyledPostList>
    </div>
  );
};

export default BlogPostList;
