import client from "../../lib/apollo-client";
import { CREATE_POST, UPDATE_POST, DELETE_POST } from "./mutations";
import { GET_POSTS, GET_POST_BY_ID } from "./queries";

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

export async function updatePost(
  id: string,
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
    mutation: UPDATE_POST,
    variables: { id, input },
    refetchQueries: [{ query: GET_POSTS }],
  });
  return data.updatePost;
}

export async function getPosts() {
  const { data } = await client.query({
    query: GET_POSTS,
  });
  console.log(data.posts);
  return data.posts;
}

export async function getPost(id: string) {
  const { data } = await client.query({
    query: GET_POST_BY_ID,
    variables: { id },
  });

  return data.postById;
}

export async function deletePost(id: string) {
  const { data } = await client.mutate({
    mutation: DELETE_POST,
    variables: { id },
    refetchQueries: [{ query: GET_POSTS }],
  });
  return data.deletePost;
}
