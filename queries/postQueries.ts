import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query {
    posts(sort: "publishedAt:desc") {
      documentId
      title
      description
      slug
      content
      publishedAt
      tags {
        name
      }
      category {
        name
      }
      headerImage {
        url
      }
    }
  }
`;


export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      documentId
      title
      slug
      description
      content
      seo
      allowComments
      createdAt
      updatedAt
      publishedAt
      headerImage {
        url
      }
      tags {
        name
      }
      category {
        name
      }
    }
  }
`;

export const GET_ALL_POST_SLUGS = gql`
  query GetAllPostSlugs {
    posts {
      slug
    }
  }
`;
