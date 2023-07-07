import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

type HomepageProps = PageProps<Queries.HomePageQuery>;

export default function Homepage(props: HomepageProps) {
  const { homepage } = props.data

  return (
    <Layout>
      {homepage.blocks.map((block) => {
        const { id, __typename, ...componentProps } = block
        const Component = sections[__typename] || Fallback
        return <Component key={id} {...(componentProps as any)} />
      })}
    </Layout>
  )
}
export const Head = (props: HomepageProps) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} />
}
export const query = graphql`
  query HomePage {
    homepage: contentfulHomepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        __typename
        ...HomepageHeroContent
      }
    }
  }
`
