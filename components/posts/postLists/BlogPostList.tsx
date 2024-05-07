import React from "react";
import { Post } from "@/types/index";
import { getPosts } from "@/services/post/postService";

const BlogPostList: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      console.log(posts[0]);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.Title}</h2>
          <p>{post.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;