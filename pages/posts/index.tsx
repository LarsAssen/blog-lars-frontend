import SEO from "@/components/SEO/SEO";
import Title from "@/components/UI/Title";
import Layout from "@/components/layout";
import BlogPostList from "@/components/posts/postLists/BlogPostList";
import styles from "./BlogPage.module.scss";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/post/postService";
import type { Post } from "@/types";

const categories = [
  "All",
  "Wellness",
  "Running",
  "Mindfulness",
  "Nutrition",
  "Philosophy",
  "Health",
  "Lifestyle",
  "Personal",
  "Newsletter",
];
const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  // Filtered and searched posts
  const filteredPosts = posts
    .filter((post) =>
      selectedCategory === "All" ? true : post.category === selectedCategory
    )
    .filter((post) =>
      post.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page on category change
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Find out all about my latest blog posts."
      />
      <div className={styles.blogPage}>
        <div className={styles.header}>
          <Title level={1}>Welcome to My Blog</Title>
          <p className={styles.description}>
            Discover insights, tips, and inspiration on wellness, running,
            mindfulness, and much more.
          </p>
          <div className={styles.controls}>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={handleSearch}
              className={styles.searchInput}
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={styles.categorySelect}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.blogList}>
          <BlogPostList posts={currentPosts} />
        </div>
        <div className={styles.pagination}>
          {[...Array(totalPages)].map((_, index) => (
            <button
              type="button"
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={
                currentPage === index + 1
                  ? styles.activePage
                  : styles.pageButton
              }
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
