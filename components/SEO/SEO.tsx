// components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "holistic health, fitness, mindfulness, running, philosophy",
  author = "Lars",
  image = "/default-image.jpg",
  url = "https://yourdomain.com",
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Head>
);

export default SEO;
