import { createPost } from '@/services/post/postService';
import { useRouter } from 'next/router';
import React ,{ useState } from 'react';

interface PostFormData{
    title: string;
    content: string;
    thumbnailImageUrl: string;
    description: string;
    status: string;
}

const PostForm = () => {
    const [formData, setFormData] = useState<PostFormData>({
        title: '',
        content: '',
        thumbnailImageUrl: '',
        description: '',
        status: '',
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createPost(formData.title, formData.content, formData.description, formData.thumbnailImageUrl, 0, formData.status);
        router.push('/admin/dashboard');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} />
                <input type="text" name="content" placeholder="Content" onChange={handleChange} />
                <input type="text" name="thumbnailImageUrl" placeholder="Thumbnail Image URL" onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} />
                <input type="text" name="status" placeholder="Status" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;