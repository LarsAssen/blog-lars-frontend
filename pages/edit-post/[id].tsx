// pages/edit-post/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
        setTitle(data.title);
        setContent(data.content);
      } catch (err) {
        setError("An error occurred while fetching the post.");
      }
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to update post");
        return;
      }
      router.push("/dashboard");
    } catch (err) {
      setError("An error occurred while updating the post.");
    }
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1>Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
        </div>
        <button style={{ marginTop: "1rem" }} type="submit">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
