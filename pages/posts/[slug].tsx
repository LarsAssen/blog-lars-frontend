import { GetStaticPaths, GetStaticProps } from 'next'
import { Post } from '@/types'
import React from 'react'
import client from '@/lib/apollo-client'
import { GET_ALL_POST_SLUGS, GET_POST_BY_SLUG } from '@/queries/postQueries'
import { mapPost, mapPosts } from '@/mappers/postMapper'

interface PostProps {
    post: Post
    }

const PostPage: React.FC<PostProps> = ({ post }) => {
    console.log(post)
    return (
        <div className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">{post.Title}</h1>
            <p className="text-gray-700">{post.Description}</p>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
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
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data, errors } = await client.query({
        query: GET_POST_BY_SLUG,
        variables: { slug: params?.slug }
    })
    if(errors) {
        console.error(errors);
        throw new Error(`Errors returned from the server: ${errors.map(e => e.message).join(', ')}`);
    }
    const post = mapPost(data.posts.data[0])
    console.log(post)

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

export default PostPage;