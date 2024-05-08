import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";

const Home: React.FC = () => {

  return (
    <Layout>
      <Hero title={"My Blog"} text={"Welcome to my blog. I hope you enjoy it."} imageUrl={"http://localhost:1337/uploads/7716_20220618_084712_231254754_original_ba604d01c3.jpg"} primaryButtonText={"Blog"} secondaryButtonText={"Newsletter"} primaryButtonOnClick={function (): void {
        throw new Error("Function not implemented.");
      } } secondaryButtonOnClick={function (): void {
        throw new Error("Function not implemented.");
      } }  />
      <Button onClick={() => console.log('Clicked!')}>Primary Button</Button>
      <Button variant="secondary" size="large">Large Secondary Button</Button>
      <Title level={1}>Welcome to My Blog</Title>
      <Title level={2}>Latest Posts</Title>
      <BlogPostList />
      <div style={{ height: '1500px', paddingTop: '100px' }}>
        <h1>Welcome to the Blog</h1>
        <p>Scroll down to see the navbar transition in action!</p>
      </div>
    </Layout>
  );
}

export default Home;
