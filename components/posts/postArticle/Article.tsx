import Title from "@/components/UI/Title";
import { HeaderImage, PostContainer } from "@/styles/Posts/ArticleStyles";
import { ContentBlock, Post } from "@/types";
import Content from "./Content";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import styled from "styled-components";
import { CategoryIcon, TagIcon, TagPill, TagsContainer } from "@/styles/Posts/BlogPostCardStyles";

interface ArticleProps {
    title: string;
    imageUrl: string;
    content: ContentBlock[];
}

const BackButtonDiv = styled.div`
    margin-bottom: 1rem;
    display: flex;
`;

export const CategoryPill = styled.div`
  display: inline-flex; /* Changed to inline-flex to wrap content naturally */
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Article: React.FC<{post: Post}> = ({post}) => {
    return (
        <PostContainer>
            <BackButtonDiv>
            <Link href="/posts" passHref> 
                <Button >Back to posts</Button>
            </Link>
            </BackButtonDiv>
            <TitleContainer>
            <Title level={1}>{post.Title}</Title>
            </TitleContainer>
            <CategoryPill>
                        <CategoryIcon />
                        {post.category}
                    </CategoryPill>
            <TagsContainer>
                    {post.tags.map((tag, index) => (
                        <TagPill key={index}>
                        <TagIcon />
                        {tag}
                        </TagPill>
                    ))}
                </TagsContainer>
            <HeaderImage>
            <Image src={post.HeaderImage} alt={post.Title} layout='fill' objectFit='cover'/>
            </HeaderImage>
            <Content content={post.Content} />
        </PostContainer>
    )
}

export default Article;