import * as React from "react"
import Layout from "../components/layout/layout"
import SEOHead from "../components/head"
import { Link } from "gatsby";

export default function NotFound() {
  return (
    <Layout>
      <h1>404: Page not found</h1>
      <p>Sorry! We couldn’t find the page you were looking for.</p>
                
      <Link to="/">
        <span>&lt; Back to home</span>
      </Link>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}
