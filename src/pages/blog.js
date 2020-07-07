import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head';
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyle from './blog.module.scss'

const Blog = () => {

    const Data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: {fields: publishedDate, order:DESC}) {
                edges {
                    node {
                        tile,
                        publishedDate(formatString: "MMMM Do, YYYY" ),
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title='Blog' />
            <h1>Blog</h1>
            <ul className={blogStyle.posts}>
                {Data.allContentfulBlogPost.edges.map( edge => {
                    return (
                        <li className={blogStyle.post}>
                            <Link to={`/blog/${edge.node.slug}`} >
                                <h2>{edge.node.tile}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )   
}

export default Blog;