import type { Post } from "@/types";

export const mapPost = (post: any): Post => {
  if (!post) {
    return {
      id: "",
      Title: "",
      Subtitle: "",
      Description: "",
      ReadTime: 0,
      Slug: "",
      Content: [],
      AllowComments: false,
      SEO: "",
      publishedAt: "",
      HeaderImage: "",
      tags: [],
      category: "",
    };
  }

  return {
    id: post.id,
    Title: post.attributes.Title,
    Subtitle: "",
    Description: post.attributes.Description,
    ReadTime: post.attributes.ReadTime,
    Slug: post.attributes.Slug,
    Content: post.attributes.Content,
    AllowComments: post.attributes.AllowComments,
    SEO: post.attributes.SEO,
    publishedAt: post.attributes.publishedAt,
    HeaderImage: post.attributes.HeaderImage.data.attributes.url,
    tags: post.attributes.tags.data.map((tag: any) => tag.attributes.Name),
    category: post.attributes.category.data.attributes.Name,
  };
};

export const mapPosts = (posts: any[]): Post[] => {
  return posts.map((post) => mapPost(post));
};
