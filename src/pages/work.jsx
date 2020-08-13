import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { Router } from "@reach/router"

const Article = ({
  article
}) => 
  <article dangerouslySetInnerHTML={{__html: article.html}}></article>

const IndexPage = ({
  data
}) =>
  <Layout>
    <div className="accordion">
      {data.allMarkdownRemark.edges.map(edge => 
        <div key={edge.node.id}>
          <Link className="accordion__link" to={`/work${edge.node.frontmatter.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p><em>{edge.node.frontmatter.year}</em></p>
          </Link>
          <Router basepath="/work">
            <Article path={edge.node.frontmatter.slug} article={edge.node}/>
          </Router>
        </div>
      )}
    </div>
  </Layout>

export default IndexPage

export const query = graphql`
  query WorkQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            client
            year
            tags
          }
          html
        }
      }
    }
  }
`