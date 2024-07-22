import { GraphQLClient } from 'graphql-request'

const space = 'dtsy4p94ymj5'
const accessToken = 'DfrmA1TqT7Y5CnA3yCFN0286UO5DHnzstc0q-dXyv2E'

if (!space || !accessToken) {
  throw new Error('Missing Contentful environment variables')
}

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${space}`
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})

export default client
