import Title from "@/components/UI/Title";
import { ContentBlock } from "@/types";
import React from "react";
import Image from "next/image";
import { StyledImageContainer, StyledParagraph } from "@/styles/Posts/ArticleStyles";

interface ContentProps {
    content: ContentBlock[];
}

const Content: React.FC<ContentProps> = ({ content }) => {
    return (
        <div>
            {content.map((block, index) => {
                switch (block.type) {
                    case 'paragraph':
                        return <StyledParagraph key={index}>{block.children[0].text}</StyledParagraph>
                    case 'heading':
                        return <Title level={block.level} key={index}>{block.children[0].text}</Title>
                    case 'image':
                        return <StyledImageContainer key={index}><Image src={block.image?.url || "" } alt={block.image?.alternativeText || ""}  layout="fill" /></StyledImageContainer>
                    default:
                        return null
                }
            })}
        </div>
    )
}

export default Content;