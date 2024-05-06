import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPost, updatePost } from "@/services/post/postService";

const EditPost: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<any>({
        title: "",
        description: "",
        content: "",
        thumbnailImageUrl: "",
        likes: 0,
        status: "",
    });
    
    useEffect(() => {
        const loadPost = async () => {
            const post = await getPost(id as string);
            console.log(post);
            setPost(post);
        };
        if (id) {
            loadPost();
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updatePost(post.id, post.title, post.content, post.description, post.thumbnailImageUrl, post.likes, post.status);
        router.push("/admin/posts");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };
    
    return (
        <div>
        <h1>Edit Post</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={post.title} onChange={handleChange} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" value={post.description} onChange={handleChange} />
            </div>
            <div>
                <label>Content</label>
                <textarea name="content" value={post.content} onChange={handleChange} />
            </div>
            <div>
                <label>Thumbnail Image URL</label>
                <input type="text" name="thumbnailImageUrl" value={post.thumbnailImageUrl} onChange={handleChange} />
            </div>
            <div>
                <label>Likes</label>
                <input type="number" name="likes" value={post.likes} onChange={handleChange} />
            </div>
            <div>
                <label>Status</label>
                <input type="text" name="status" value={post.status} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
    }

export default EditPost;