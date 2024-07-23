import { GraphQLClient } from 'graphql-request'

const space = process.env.SPACE_ID
const accessToken = process.env.ACCESS_TOKEN

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
