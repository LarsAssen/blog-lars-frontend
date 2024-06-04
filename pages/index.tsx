import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import Head from "next/head";
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
      <Head>
        <title>Lars Assen</title>
        <meta name="description" content="Welcome to my blog. I hope you enjoy it." />
      </Head>
      <Hero title={"I'm Lars Assen"} text={"My goal is to help you become the best version of yourself. Everything from health and fitness, to personal philosophy and growth. Click below to get started on your own journey."} imageUrl="https://res.cloudinary.com/devvbeebq/image/upload/v1715929994/hero_5613a177b7.jpg" primaryButtonText={"Blog"} secondaryButtonText={"Newsletter"} primaryButtonOnClick={handlePrimaryButtonClick} secondaryButtonOnClick={handleSecondaryButtonClick}/>
      <BlogPostList limit={4} />
      <div ref={newsletterRef} >
      <NewsletterForm />
      </div>
    </Layout>
  );
}

export default Home;
