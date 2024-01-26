import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const SearchPage = () => {
  return (
    <Layout pageTitle="Search for a community by zip code on this page.">
      <p>Search box will go here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default SearchPage