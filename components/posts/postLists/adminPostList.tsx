import React from "react";
import { getPosts, deletePost } from "@/services/post/postService";
import Link from "next/link";
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    background-color: #f5f5f5; // Light grey background
`;

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2); // Enhanced effect on hover
    }
`;

const HeaderImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 20px;
`;

const ListItemHeader = styled.div`
    background-color: #0077cc; // Stylish blue header
    color: white;
    display: flex;
    align-items: center;
    padding: 16px 24px;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const ListItemBody = styled.div`
    padding: 20px;
    font-size: 16px;
    color: #333; // Darker text for better readability
`;

const ListItemActions = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #eee; // Subtle separation from content
`;

const EditLink = styled.a`
    padding: 8px 16px;
    background-color: #0077cc;
    color: white;
    border-radius: 4px;
    text-decoration: none;

    &:hover {
        background-color: #005fa3; // Slightly darker on hover
    }
`;

const AdminPostList: React.FC = () => {
    const [posts, setPosts] = React.useState<any>([]);
    const loadPosts = async () => {
        const posts = await getPosts();
        console.log(posts);
        setPosts(posts);
    };

    React.useEffect(() => {
        loadPosts();
    }, []);

    const handleDelete = async (id: string) => {
        const result = await deletePost(id);
        if (result) {
            alert("Post deleted successfully");
            loadPosts();
        }
        else {
            alert("Failed to delete post");
        }
    }

   

    return (
        <div>
            <Link href="/admin/posts/new">
                Create New Post
            </Link>
            <Container>
                {posts.map((post: any) => (
                    <ListItem key={post.id}>
                        <ListItemHeader>
                            <Title>{post.title}</Title>
                            <HeaderImage src={"https://picsum.photos/200"} alt={post.title} />
                        </ListItemHeader>
                        <ListItemBody>{post.description}</ListItemBody>
                        <ListItemActions>
                            <Link href={`/admin/posts/${post.id}`}><EditLink>Edit</EditLink></Link>
                            <EditLink onClick={() => handleDelete(post.id)}>Delete</EditLink>
                        </ListItemActions>
                    </ListItem>
                ))}
            </Container>
        </div>
    );
}

export default AdminPostList;