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
