// pages/view-post/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const ViewPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (!res.ok) {
          setError(data.message || "Failed to fetch post");
          return;
        }
        setPost(data);
      } catch (err) {
        setError("An error occurred while fetching the post.");
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={() => router.push("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ViewPost;
