import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO/SEO";
import { getPosts } from "@/services/post/postService";
import type { Post } from "@/types";

const Home: React.FC = () => {
  const router = useRouter();
  const newsletterRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSecondaryButtonClick = () => {
    if (newsletterRef.current) {
      newsletterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      const limitedPosts = posts.slice(0, 4);
      setPosts(limitedPosts);
    };
    fetchPosts();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Layout>
      <SEO title="Home" description="Welcome to my blog." />
      <Hero />
      <BlogPostList posts={posts} />
      <div ref={newsletterRef}>
        <NewsletterForm />
      </div>
    </Layout>
  );
};

export default Home;
