import Layout from "@/components/layout";
import BlogPostList from "@/components/posts/postLists/BlogPostList";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <BlogPostList />
    </Layout>
  );
}

export default Home;
