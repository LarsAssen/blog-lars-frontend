export interface Post {
  id: string;
  Title: string;
  Subtitle: string;
  Description: string;
  ReadTime: number;
  Slug: string;
  Content: string;
  AllowComments: boolean;
  SEO: string;
  publishedAt: string;
  HeaderImage: string;
  tags: string[];
  category: string;
}
