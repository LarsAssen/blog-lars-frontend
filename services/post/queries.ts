import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      content
      description
    }
  }
`;
export const GET_POST_BY_ID = gql`
  query GetPostById($id: String!) {
    postById(id: $id) {
      id
      title
      content
      description
      thumbnailImageUrl
      likes
      status
    }
  }
`;
