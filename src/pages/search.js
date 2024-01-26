import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '/src/components/layout'
import Seo from '/src/components/seo'

const SearchPage = ({ data }) => {
  return (
    <Layout pageTitle="Community Search Page">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Community Search Page"/>

export default SearchPage