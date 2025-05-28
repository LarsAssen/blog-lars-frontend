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
      Content: [], // Could be string if not using structured content
      AllowComments: false,
      SEO: "",
      publishedAt: "",
      HeaderImage: "",
      tags: [],
      category: "",
    };
  }

  return {
    id: post.documentId ?? "",
    Title: post.title ?? "",
    Subtitle: "", // Still unused
    Description: post.description ?? "",
    ReadTime: post.readTime ?? 0,
    Slug: post.slug ?? "",
    Content: post.content ?? [], // If it's raw HTML, update interface or convert
    AllowComments: post.allowComments ?? false,
    SEO: post.seo ?? "",
    publishedAt: post.publishedAt ?? "",
    HeaderImage: post.headerImage?.url ?? "",
    tags: post.tags?.map((tag: any) => tag.name) ?? [],
    category: post.category?.name ?? "",
  };
};

export const mapPosts = (posts: any[]): Post[] => {
  return posts.map(mapPost);
};
