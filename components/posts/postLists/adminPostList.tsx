import React from "react";
import { getPosts, createPost } from "@/services/post/postService";

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

    const handleCreatePost = async () => {
        const newPost = await createPost("New Post", "New Content", "New Description", "https://via.placeholder.com/150", 0, "draft", new Date().toISOString(), new Date().toISOString());
        console.log(newPost);
        loadPosts();
    }

    return (
        <div>
            <button onClick={handleCreatePost}>Create Post</button>
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