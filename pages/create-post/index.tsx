"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"; // Use `next/router` for Pages Router
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sonner } from "@/components/ui/sonner"; // Ensure you have a toast component

// 🛠️ Define the validation schema
const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  tags: z.string().optional(), // Optional field
});

type PostFormData = z.infer<typeof postSchema>;

export default function CreatePostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  // 🛠️ Submit handler
  const onSubmit = async (data: PostFormData) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token"); // Adjust based on your auth system
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      sonner({
        title: "Success!",
        description: "Post created successfully",
        variant: "default",
      });

      router.push("/dashboard"); // Redirect back to dashboard
    } catch (error) {
      sonner({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Create a New Post
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <Input {...register("title")} placeholder="Enter post title" />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <Textarea
                {...register("content")}
                placeholder="Write something amazing..."
                rows={6}
              />
              {errors.content && (
                <p className="text-red-500 text-sm">{errors.content.message}</p>
              )}
            </div>

            {/* Tags Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tags (comma-separated)
              </label>
              <Input
                {...register("tags")}
                placeholder="e.g. running, fitness, health"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                type="button"
                onClick={() => router.push("/dashboard")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white"
              >
                {loading ? "Submitting..." : "Create Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
