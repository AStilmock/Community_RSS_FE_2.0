import * as React from "react"
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>About the Developer</h1>
      <p>Hi there! I'm Andy, the proud creator of this website.</p>
      <p>The application functions using Ruby on Rails and GraphQL for the backend API and data gathering.</p>
      <p>While utilizing React and Gatsby for parsing and displaying data and information on the front end for the user.</p>
      <p>Please enter the zip code of your community on the home page, and see what information you discover today.</p>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export const Head = () => <title>About Page</title>

export default AboutPage