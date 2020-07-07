import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import footerStyle from './footer.module.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return(
        <div>
            <footer className={footerStyle.footer}>
                Created by {data.site.siteMetadata.author} @ 2020 
            </footer>
        </div>
    )
}

export default Footer;