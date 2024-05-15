import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import { useRouter } from "next/router";
import { env } from "process";
import { useRef } from "react";

const Home: React.FC = () => {
  const router = useRouter();
  const newsletterRef = useRef<HTMLDivElement>(null);
  const handlePrimaryButtonClick = () => {
    router.push('/posts');
  };

  const handleSecondaryButtonClick = () => {
    if (newsletterRef.current) {
      newsletterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Hero title={"My Blog"} text={"Welcome to my blog. I hope you enjoy it."} imageUrl="https://blog-lars-backend-pjobs.ondigitalocean.app/uploads/hero_bf0f08bdb3.jpg" primaryButtonText={"Blog"} secondaryButtonText={"Newsletter"} primaryButtonOnClick={handlePrimaryButtonClick} secondaryButtonOnClick={handleSecondaryButtonClick}/>
      <BlogPostList limit={4} />
      <div ref={newsletterRef} >
      <NewsletterForm />
      </div>
    </Layout>
  );
}

export default Home;
