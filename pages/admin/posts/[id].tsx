import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPost, updatePost } from "@/services/post/postService";
import styled from 'styled-components';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export const FormContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

export const Select = styled.select`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px; // Limit the size of the image preview
  margin-top: 10px;
  border-radius: 8px; // Optional: for a rounded corner look
`;
const StyledQuill = styled(ReactQuill)`
  height: 200px; // Set a minimum height
  .ql-editor {
    min-height: 160px; // Ensure the editor has a minimum height
  }
`;



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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleContentChange = (content: string) => {
        setPost((prev: any) => ({
          ...prev,
          content
        }));
    };
    
    return (
        <FormContainer>
        <h1>Edit Post</h1>
        <StyledForm onSubmit={handleSubmit}>
            <div>
                <Label>Title</Label>
                <Input type="text" name="title" value={post.title} onChange={handleChange} />
            </div>
            <div>
                <Label>Description</Label>
                <TextArea name="description" value={post.description} onChange={handleChange} />
            </div>
            <div>
                <Label>Content</Label>
                <StyledQuill theme="snow"  value={post.content} onChange={handleContentChange} />
            </div>
            <div>
                <Label>Thumbnail Image URL</Label>
                <input type="text" name="thumbnailImageUrl" value={post.thumbnailImageUrl} onChange={handleChange} />
            </div>
            <div>
                <Label>Status</Label>
                <Select name="status" value={post.status} onChange={handleChange}>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </Select>
            </div>
            <Button type="submit">Submit</Button>
        </StyledForm>
        </FormContainer>
    );
    }

export default EditPost;