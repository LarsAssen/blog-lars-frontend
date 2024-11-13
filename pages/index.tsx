import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO/SEO";

const Home: React.FC = () => {
  const router = useRouter();
  const newsletterRef = useRef<HTMLDivElement>(null);
  const handlePrimaryButtonClick = () => {
    router.push("/posts");
  };

  const handleSecondaryButtonClick = () => {
    if (newsletterRef.current) {
      newsletterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Layout>
      <SEO title="Home" description="Welcome to my blog." />
      <Hero />
      <BlogPostList limit={4} />
      <div ref={newsletterRef}>
        <NewsletterForm />
      </div>
    </Layout>
  );
};

export default Home;
