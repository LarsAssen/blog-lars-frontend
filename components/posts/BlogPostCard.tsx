import { Card, CardButton, CardContent, CardDescription, CardImage, CardTitle } from "@/styles/Posts/BlogPostCardStyles";
import { Post } from "@/types";
import Link from "next/link";

const BlogPostCard:React.FC<{post:Post}> = ({post}) => {
    return (
        <Card>
            <CardImage src={post.HeaderImage} />
            <CardContent>
                <CardTitle>{post.Title}</CardTitle>
                <CardDescription>{post.Description}</CardDescription>
                <div>{post.publishedAt}</div>
                <div>{post.ReadTime} min read</div>
                <Link href={post.Slug} passHref>
                <CardButton>Read More</CardButton>
                </Link>
            </CardContent>
        </Card>
    );
}

export default BlogPostCard;