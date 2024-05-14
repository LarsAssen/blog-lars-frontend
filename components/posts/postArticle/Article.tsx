import Title from "@/components/UI/Title";
import { HeaderImage, PostContainer } from "@/styles/Posts/ArticleStyles";
import { ContentBlock } from "@/types";
import Content from "./Content";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";

interface ArticleProps {
    title: string;
    imageUrl: string;
    content: ContentBlock[];
}

const Article: React.FC<ArticleProps> = ({title, imageUrl, content}) => {
    return (
        <PostContainer>
            <Link href="/posts" passHref> 
                <Button >Back to posts</Button>
            </Link>
            <Title level={1}>{title}</Title>
            <HeaderImage>
            <Image src={imageUrl} alt={title} layout='fill' objectFit='cover'/>
            </HeaderImage>
            <Content content={content} />
        </PostContainer>
    )
}

export default Article;