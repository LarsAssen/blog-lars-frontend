import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import { env } from "process";

const Home: React.FC = () => {
  console.log(process.env.NEXT_PUBLIC_URL);
  return (
    <Layout>
      <Hero title={"My Blog"} text={"Welcome to my blog. I hope you enjoy it."} imageUrl="https://blog-lars-backend-pjobs.ondigitalocean.app/uploads/hero_bf0f08bdb3.jpg" primaryButtonText={"Blog"} secondaryButtonText={"Newsletter"} primaryButtonOnClick={function (): void {
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
