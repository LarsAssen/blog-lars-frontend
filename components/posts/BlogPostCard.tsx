import { Card, CardButton, CardContent, CardDescription, CardImage, CardTitle } from "@/styles/Posts/BlogPostCardStyles";
import { Post } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import styled from "styled-components";

const DateText = styled.div`
  color: #777;
  margin-top: 0.5rem;
`;

const BlogPostCard:React.FC<{post:Post}> = ({post}) => {
    return (
        <Card>
            <CardImage src={post.HeaderImage} />
            <CardContent>
                <CardTitle>{post.Title}</CardTitle>
                <CardDescription>{post.Description}</CardDescription>
                <DateText>{format(new Date(post.publishedAt), 'd MMM yyyy')}</DateText>
                <div>{post.ReadTime} min read</div>
                <Link href={`posts/${post.Slug}`} passHref>
                <CardButton>Read More</CardButton>
                </Link>
            </CardContent>
        </Card>
    );
}

export default BlogPostCard;