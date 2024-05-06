import React from "react";
import { getPosts, deletePost } from "@/services/post/postService";
import Link from "next/link";

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
            {posts.map((post:any) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <Link href={`/admin/posts/${post.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AdminPostList;