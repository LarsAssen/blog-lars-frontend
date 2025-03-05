"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Editor from "@/components/editor/Editor";

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  tags: z.string().optional(),
});

type PostFormData = z.infer<typeof postSchema>;

export default function CreatePostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostFormData) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...data, content }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      toast.success("Post created successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto p-6">
      <CardHeader>
        <CardTitle>Create a New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("title")} placeholder="Title" />
          <Editor content={content} onChange={setContent} />
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Create Post"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
