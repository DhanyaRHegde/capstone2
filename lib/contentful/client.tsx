import { GraphQLClient } from 'graphql-request'

// const space = 'dtsy4p94ymj5'
// const accessToken = 'swGUBnPBNqOxHYbHacWpT1uO9bKT9WMPdfLgCoKECRk'
// console.log(space, accessToken)

// if (!space || !accessToken) {
//   throw new Error('No environment variables')
// }

const endpoint = `https://graphql.contentful.com/content/v1/spaces/dtsy4p94ymj5`

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer DfrmA1TqT7Y5CnA3yCFN0286UO5DHnzstc0q-dXyv2E`,
  },
})

export default client
