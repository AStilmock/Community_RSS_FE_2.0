import * as React from "react"
import { Link } from 'gatsby'
import Layout from '/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Community RSS, the Community Resource Rating Website!">
      <p>Simply enter a valid United States zip code below to view all local resource data.</p>
      <StaticImage
        alt="I know kung fu"
        src="/Users/stillymonster/Desktop/Screen Shots/Screen Shot 2023-06-02 at 9.00.28 AM.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage