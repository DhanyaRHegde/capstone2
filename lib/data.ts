import { gql } from 'graphql-request'
import client from './contentful/client'
import { CapstoneItem, CapstoneResponse } from './models/contentful'

const CAPSTONE_QUERY = gql`
  query {
    capstoneCollection {
      items {
        sys {
          id
        }
        name
        image {
          url
          description
        }
        price
        discount
        slug
        type
      }
    }
  }
`

export async function fetchCapstoneData(): Promise<CapstoneItem[]> {
  try {
    const data: CapstoneResponse = await client.request(CAPSTONE_QUERY)
    return data.capstoneCollection.items
  } catch (error) {
    console.error('Error fetching capstone data:', error)
    return []
  }
}
