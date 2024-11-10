import client from "@/lib/apollo-client";
import { mapPosts } from "@/mappers/postMapper";
import { GET_BLOG_POSTS } from "@/queries/postQueries";
import type { Post } from "@/types/index";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await client.query({
      query: GET_BLOG_POSTS,
    });
    const posts = mapPosts(data.posts.data);
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};
