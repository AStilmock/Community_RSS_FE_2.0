import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '/src/components/layout'
import Seo from '/src/components/seo'

const SearchPage = ({ data }) => {
  return (
    <Layout pageTitle="Community Search Page">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Search Date: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: ASC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Community Search Page"/>

export default SearchPage