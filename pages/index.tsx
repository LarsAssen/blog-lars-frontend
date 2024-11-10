import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

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
      <Head>
        <title>Lars Assen</title>
        <meta
          name="description"
          content="Welcome to my blog. I hope you enjoy it."
        />
      </Head>
      <Hero />
      <BlogPostList limit={4} />
      <div ref={newsletterRef}>
        <NewsletterForm />
      </div>
    </Layout>
  );
};

export default Home;
