const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createSchemaCustomization = async ({ actions }) => {


  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(options) {
      const { args } = getGatsbyImageResolver()
      return {
        args,
      }
    },
  })

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
  // actions.createFieldExtension({
  //   name: "richText",
  //   extend(options) {
  //     return {
  //       resolve(source, args, context, info) {
  //         const body = source.body
  //         const doc = JSON.parse(body.raw)
  //         const html = documentToHtmlString(doc)
  //         return html
  //       },
  //     }
  //   },
  // })
   // CMS-specific types for Homepage
   actions.createTypes(/* GraphQL */ `
   type ContentfulHomepageLink implements Node @dontInfer {
     href: String
     text: String
   }

   type ContentfulAsset implements Node {
     id: ID!
     alt: String @proxy(from: "title")
     gatsbyImageData: GatsbyImageData @imagePassthroughArgs
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
 `)
}

// exports.createPages = ({ actions }) => {
//   const { createSlice } = actions
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header.tsx"),
//   })
//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.tsx"),
//   })
// }
      