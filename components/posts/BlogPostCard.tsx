import { Card, CardButton, CardContent, CardDescription, CardImage, CardTitle, CategoryIcon, CategoryPill, DateText, Header, TagIcon, TagPill, TagsContainer, TimeToRead } from "@/styles/Posts/BlogPostCardStyles";
import { Post } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import styled from "styled-components";
import Title from "../UI/Title";
import Button from "../UI/Button";
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'


const BlogPostCard:React.FC<{post:Post}> = ({post}) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });


    const styles = useSpring({
        from: {
          opacity: 0,
          y: '6%',
        },
        to: {
          opacity: 1,
          y: '0%',
        },
      })

    return (
        <animated.div style={styles} >
            <Card>
                <CardImage src={post.HeaderImage} />
                <CardContent>
                    <Header>
                    <CategoryPill>
                            <CategoryIcon />
                            {post.category}
                    </CategoryPill>
                        
                        <TimeToRead>{post.ReadTime} min read</TimeToRead>
                        <Title level={5}>{post.Title}</Title>
                    </Header>
                    <CardDescription> {post.Description.length > 100 ? `${post.Description.substring(0, 100)}...` : post.Description}</CardDescription>
                    <DateText>{format(new Date(post.publishedAt), 'd MMM yyyy')}</DateText>
                    <Link href={`posts/${post.Slug}`} passHref>
                    <Button>Read More</Button>
                    </Link>
                    <TagsContainer>
                        {post.tags.map((tag, index) => (
                            <TagPill key={index}>
                            <TagIcon />
                            {tag}
                            </TagPill>
                        ))}
                    </TagsContainer>
                </CardContent>
            </Card>
        </animated.div>
    );
}

export default BlogPostCard;