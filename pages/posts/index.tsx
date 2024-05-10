import Title from "@/components/UI/Title"
import Layout from "@/components/layout"
import BlogPostList from "@/components/posts/postLists/BlogPostList"

const BlogPage:React.FC = () => {
    return (
        <Layout>
            <Title level={1}>Blog Posts</Title>
            <BlogPostList />
        </Layout>
    )
}

export default BlogPage