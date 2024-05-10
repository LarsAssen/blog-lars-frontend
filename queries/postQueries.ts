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

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    posts(filters: { Slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Title
          Slug
          Description
          Content
          ReadTime
          SEO
          AllowComments
          HeaderImage {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_ALL_POST_SLUGS = gql`
  query GetAllPostSlugs {
    posts {
      data {
        attributes {
          Slug
        }
      }
    }
  }
`;
