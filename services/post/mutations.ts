import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      content
      description
      thumbnailImageUrl
      likes
      status
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: String!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      content
      description
      thumbnailImageUrl
      likes
      status
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String!) {
    deletePost(id: $id) {
      id
    }
  }
`;
