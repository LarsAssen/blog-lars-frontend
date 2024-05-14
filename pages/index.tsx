import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import BlogPostList from "@/components/posts/postLists/BlogPostList";

const Home: React.FC = () => {

  return (
    <Layout>
      <Hero title={"My Blog"} text={"Welcome to my blog. I hope you enjoy it."} imageUrl={"http://localhost:1337/uploads/7716_20220618_084712_231254754_original_d4b611cdc2.jpg"} primaryButtonText={"Blog"} secondaryButtonText={"Newsletter"} primaryButtonOnClick={function (): void {
        throw new Error("Function not implemented.");
      } } secondaryButtonOnClick={function (): void {
        throw new Error("Function not implemented.");
      } }  />
      <BlogPostList />
      <NewsletterForm />
    </Layout>
  );
}

export default Home;
