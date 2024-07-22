// src/lib/contentful/fetchData.ts
import { GraphQLClient } from 'graphql-request'
import { BaristaItem, ContentfulResponse } from './models/contentful'
import client from './contentful/client'

// Define the GraphQL query
const BARISTA_QUERY = `
  query {
    baristaCollection {
      items {
        sys {
          id
        }
        name
        price
        discount
        image {
          url
          description
        }
        type
        slug
      }
    }
  }
`

// Fetch data function
export async function fetchBaristaData(): Promise<BaristaItem[]> {
  try {
    const response: ContentfulResponse = await client.request(BARISTA_QUERY)
    return response.baristaCollection.items
  } catch (error) {
    console.error('Error fetching barista data:', error)
    return []
  }
}
