import * as React from "react"
import { Link } from 'gatsby'
import Layout from '/src/components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Community RSS, the Community Resource Rating Website!">
      <p>Simply enter a valid United States zip code below to view all local resource data.</p>
      <Link to="/about">About</Link>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage