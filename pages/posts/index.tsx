import Title from "@/components/UI/Title"
import Layout from "@/components/layout"
import BlogPostList from "@/components/posts/postLists/BlogPostList"
import styled from "styled-components"

const StyledBlogPage = styled.div`
    margin: 150px auto;
`


const BlogPage:React.FC = () => {
    return (
        <Layout>
            <StyledBlogPage >
            <Title level={1}>Blog Posts</Title>
            <BlogPostList />
            </StyledBlogPage>
        </Layout>
    )
}

export default BlogPage