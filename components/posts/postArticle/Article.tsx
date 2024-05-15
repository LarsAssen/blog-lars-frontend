import Title from "@/components/UI/Title";
import { HeaderImage, PostContainer } from "@/styles/Posts/ArticleStyles";
import { ContentBlock } from "@/types";
import Content from "./Content";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import styled from "styled-components";

interface ArticleProps {
    title: string;
    imageUrl: string;
    content: ContentBlock[];
}

const BackButtonDiv = styled.div`
    margin-bottom: 1rem;
    display: flex;
`;

const Article: React.FC<ArticleProps> = ({title, imageUrl, content}) => {
    return (
        <PostContainer>
            <BackButtonDiv>
            <Link href="/posts" passHref> 
                <Button >Back to posts</Button>
            </Link>
            </BackButtonDiv>
            <Title level={1}>{title}</Title>
            <HeaderImage>
            <Image src={imageUrl} alt={title} layout='fill' objectFit='cover'/>
            </HeaderImage>
            <Content content={content} />
        </PostContainer>
    )
}

export default Article;