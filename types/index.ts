export interface ContentBlock {
  type: string;
  children: { text: string; type?: string; bold: boolean }[];
  image?: { alternativeText: string; url: string };
  level?: number;
}

export interface Post {
  id: string;
  Title: string;
  Subtitle: string;
  Description: string;
  ReadTime: number;
  Slug: string;
  Content: ContentBlock[];
  AllowComments: boolean;
  SEO: string;
  publishedAt: string;
  HeaderImage: string;
  tags: string[];
  category: string;
}
