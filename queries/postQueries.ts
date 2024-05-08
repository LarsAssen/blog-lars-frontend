import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query {
    posts {
      data {
        id
        attributes {
          Title
          Description
          ReadTime
          Slug
          Content
          AllowComments
          SEO
          publishedAt
          HeaderImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
