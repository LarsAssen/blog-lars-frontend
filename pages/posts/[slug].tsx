import type { GetStaticPaths, GetStaticProps } from "next";
import type { Post } from "@/types";
import type React from "react";
import client from "@/lib/apollo-client";
import { GET_ALL_POST_SLUGS, GET_BLOG_POSTS } from "@/queries/postQueries";
import { mapPost } from "@/mappers/postMapper";
import Layout from "@/components/layout";
import Article from "@/components/posts/postArticle/Article";
import { useRouter } from "next/router";
import SEO from "@/components/SEO/SEO";
import ProgressScroller from "@/components/progressScroller/ProgressScroller";

interface PostProps {
  post: Post;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  if (!post.Content) {
    return <div>Post not found</div>;
  }

  return (
    <Layout>
      <SEO title={post.Title} description={post.Description} />
      <ProgressScroller />
      <Article post={post} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_POST_SLUGS,
    });

    const slugs = data.posts.map((post: any) => post.slug);
    const paths = slugs.map((slug: any) => ({
      params: { slug },
    }));

    return {
      paths,
      fallback: "blocking", // Use 'blocking' to handle fallback gracefully
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  try {
    const { data } = await client.query({
      query: GET_BLOG_POSTS,
    });

    const postData = data.posts.find((p: any) => p.slug === slug);

    if (!postData) {
      console.error("Post not found for slug:", slug);
      return { notFound: true };
    }

    const post = mapPost(postData);

    return {
      props: { post },
      revalidate: 60,
    };
  } catch (error: any) {
    console.error("Apollo error:", error);
    return { notFound: true };
  }
};

export default PostPage;
