import { Post } from "@/types";

export const mapPost = (post: any): Post => {
  if (!post) {
    return {
      id: "",
      Title: "",
      Description: "",
      ReadTime: 0,
      Slug: "",
      Content: [],
      AllowComments: false,
      SEO: "",
      publishedAt: "",
      HeaderImage: "",
    };
  }

  return {
    id: post.id,
    Title: post.attributes.Title,
    Description: post.attributes.Description,
    ReadTime: post.attributes.ReadTime,
    Slug: post.attributes.Slug,
    Content: post.attributes.Content,
    AllowComments: post.attributes.AllowComments,
    SEO: post.attributes.SEO,
    publishedAt: post.attributes.publishedAt,
    HeaderImage: `http://localhost:1337${post.attributes.HeaderImage.data.attributes.url}`,
  };
};

export const mapPosts = (posts: any[]): Post[] => {
  return posts.map((post) => mapPost(post));
};
