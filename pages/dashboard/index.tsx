// pages/dashboard.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Dashboard = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    fetchPosts(token);
  }, []);

  const fetchPosts = async (token: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to fetch posts");
        return;
      }
      setPosts(data);
    } catch (err) {
      setError("An error occurred while fetching posts.");
    }
  };

  const handleDelete = async (postId: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Failed to delete post");
        return;
      }
      // Update state by filtering out the deleted post
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (err) {
      alert("An error occurred while deleting the post.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1>Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => router.push("/create-post")}>
        Create New Post
      </button>
      <h2>Your Posts</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "1rem",
              border: "1px solid #ccc",
              padding: "1rem",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => router.push(`/view-post/${post.id}`)}>
                View
              </button>
              <button onClick={() => router.push(`/edit-post/${post.id}`)}>
                Edit
              </button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
