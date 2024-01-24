import * as React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      {/* <div
        style={{
          backgroundColor: '#5E2C4D',
          width: '1000px',
          height: '1000px'
        }}
      /> */}
      <h1>Welcome to Community RSS, the Community Resource Rating Website!</h1>
      <p>Simply enter a valid United States zip code to view all local resource data.</p>
      <Link to="/about">About</Link>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage