
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { getGatsbyImageResolver } from "gatsby-plugin-image/graphql-utils";
import path from "path";

export const createSchemaCustomization = ({ actions }) => {
  // actions.createFieldExtension({
  //   name: "imagePassthroughArgs",
  //   extend(options) {
  //     const { args } = getGatsbyImageResolver()
  //     return {
  //       args,
  //     }
  //   },
  // })

  actions.createFieldExtension({
    name: "imageUrl",
    extend(options) {
      const schemaRE = /^\/\//
      const addURLSchema = (str) => {
        if (schemaRE.test(str)) return `https:${str}`
        return str
      }
      return {
        resolve(source) {
          return addURLSchema(source.file.url)
        },
      }
    },
  })
  actions.createFieldExtension({
    name: "richText",
    extend(options) {
      return {
        resolve(source, args, context, info) {
          const body = source.body
          const doc = JSON.parse(body.raw)
          const html = documentToHtmlString(doc)
          return html
        },
      }
    },
  })
  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type ContentfulHomepageLink implements Node @dontInfer {
      href: String
      text: String
    }

    type ContentfulAsset implements Node {
      id: ID!
      alt: String @proxy(from: "title")
      gatsbyImageData: GatsbyImageData #@imagePassthroughArgs
      url: String @imageUrl
      file: JSON
      title: String
    }

    type ContentfulHomepageHero implements Node
      @dontInfer {
      id: ID!
      heading: String!
      kicker: String
      subhead: String
      image: ContentfulAsset @link(from: "image___NODE")
      text: String
      links: [ContentfulHomepageLink] @link(from: "links___NODE")
    }

    type ContentfulHomepage implements Node @dontInfer {
      id: ID!
      title: String
      description: String
      image: ContentfulAsset @link(from: "image___NODE")
      content: [ContentfulHomepageHero] @link(from: "content___NODE")
    }

    type ContentfulBreed implements Node {
      id: ID!
      name: String
      slug: String
      origin: String
      lifespanAverage: Int
      lifespanMaximum: Int
      friendliness: Int
      photo: ContentfulAsset @link(from: "photo___NODE")
    }
 `)
}

export const createPages = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: path.resolve("./src/components/layout/header.tsx"),
  })
  createSlice({
    id: "footer",
    component: path.resolve("./src/components/layout/footer.tsx"),
  })
}
      