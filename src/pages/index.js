import * as React from "react"
import Layout from '/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '/src/components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="COMMUNITY RESILIENCE SERVICES & SOCIETY">
      <p>Welcome to Community RSS, the Community Resource Rating Website!</p>
      <StaticImage
        alt="I know kung fu"
        src="/Users/stillymonster/Desktop/Screen Shots/Screen Shot 2023-06-02 at 9.00.28 AM.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage