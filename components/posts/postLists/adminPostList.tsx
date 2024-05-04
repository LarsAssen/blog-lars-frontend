import React from "react";
import { getPosts, createPost } from "@/services/post/postService";
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

   

    return (
        <div>
            <Link href="/admin/posts/new">
                Create New Post
            </Link>
            {posts.map((post:any) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
}

export default AdminPostList;