import type { GetStaticPaths, GetStaticProps } from "next";
import type { Post } from "@/types";
import type React from "react";
import client from "@/lib/apollo-client";
import { GET_ALL_POST_SLUGS, GET_POST_BY_SLUG } from "@/queries/postQueries";
import { mapPost } from "@/mappers/postMapper";
import Layout from "@/components/layout";
import Article from "@/components/posts/postArticle/Article";
import { useRouter } from "next/router";
import SEO from "@/components/SEO/SEO";

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
      <Article post={post} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_POST_SLUGS,
    });

    const slugs = data.posts.data.map((slug: any) => slug.attributes.Slug);
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
  try {
    const { data, errors } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug: params?.slug },
    });

    if (errors) {
      console.error(errors);
      throw new Error(
        `Errors returned from the server: ${errors
          .map((e) => e.message)
          .join(", ")}`
      );
    }

    if (!data || !data.posts || !data.posts.data || !data.posts.data[0]) {
      console.error("Data structure is not as expected:", data);
      return {
        notFound: true,
      };
    }

    const post = mapPost(data.posts.data[0]);

    if (!post) {
      console.error("Post mapping resulted in undefined:", data.posts.data[0]);
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
    };
  }
};

export default PostPage;
