import { GetStaticPaths, GetStaticProps } from 'next'
import { Post } from '@/types'
import React from 'react'
import client from '@/lib/apollo-client'
import { GET_ALL_POST_SLUGS, GET_POST_BY_SLUG } from '@/queries/postQueries'
import { mapPost } from '@/mappers/postMapper'
import Layout from '@/components/layout'
import Article from '@/components/posts/postArticle/Article'

interface PostProps {
    post: Post
    }

const PostPage: React.FC<PostProps> = ({ post }) => {

    return (
        <Layout>
        <Article title={post.Title} imageUrl={post.HeaderImage} content={post.Content} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    
    try{
        const { data } = await client.query({
            query: GET_ALL_POST_SLUGS
        })
    
        const slugs = data.posts.data.map((slug:any) => slug.attributes.Slug)
        const paths = slugs.map((slug:any) => ({
            params: { slug: slug }
        }))
    
        return {
            paths,
            fallback: true
        }
    } catch (error) {
        console.error('Error fetching post:', error);
        return {
            paths: [],
            fallback: 'blocking', // Handle fallback gracefully
          };
      } 
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    try{
        const { data, errors } = await client.query({
            query: GET_POST_BY_SLUG,
            variables: { slug: params?.slug }
        })
        if(errors) {
            console.error(errors);
            throw new Error(`Errors returned from the server: ${errors.map(e => e.message).join(', ')}`);
        }
        const post = mapPost(data.posts.data[0])
    
        if (!post) {
            return {
                notFound: true
            }
        }
    
        return {
            props: {
                post: post
            },
            revalidate: 1
        }
    }
    catch (error) {
        console.error('Error fetching post:', error);
        return {
          notFound: true,
        };
      }
}

export default PostPage;