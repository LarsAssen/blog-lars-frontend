import Layout from "@/components/layout";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import Button from "@/components/UI/Button";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Button onClick={() => console.log('Clicked!')}>Primary Button</Button>
      <Button variant="secondary" size="large">Large Secondary Button</Button>
      <BlogPostList />
    </Layout>
  );
}

export default Home;
