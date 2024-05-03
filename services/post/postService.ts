import client from "../../lib/apollo-client";
import { CREATE_POST } from "./mutations";
import { GET_POSTS } from "./queries";

export async function createPost(
  title: string,
  content: string,
  description: string,
  thumbnailImageUrl?: string,
  likes?: number,
  status?: string,
  createdAt?: string,
  updatedAt?: string
) {
  const input = {
    title,
    content,
    description,
    thumbnailImageUrl,
    likes,
    status,
    createdAt,
    updatedAt,
  };
  const { data } = await client.mutate({
    mutation: CREATE_POST,
    variables: { input },
    refetchQueries: [{ query: GET_POSTS }],
  });
  return data.createPost;
}

export async function getPosts() {
  const { data } = await client.query({
    query: GET_POSTS,
  });
  console.log(data.posts);
  return data.posts;
}
