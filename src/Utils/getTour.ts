import { TourData } from "@/Components/Tour/models";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
  query GetTourBySlug($slug: ID!) {
    tour(id: $slug, idType: SLUG) {
      id
      title
      slug
      translations {
        language {
          name
        }
      }
      tours {
        main {
          mainImage {
            node {
              sourceUrl
            }
          }
          title
          tourprice
          tourDuration
        }
        features {
          difficulty
          maxaltitude
        }
        accomodationAndGroup {
          accommodation
          groupSize
        }
        introduction {
          introductionContent {
            secondaryTitle
            content
          }
          map {
            node {
              sourceUrl
            }
          }
        }
        tourInfo {
          overview
          itineraryContent {
            day1 {
              titulo
              theBestOfTheDay
              content
              image1 {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
      language {
        slug
      }
    }
  }
`;

export async function getTourBySlug(slug: string) : Promise<TourData> {
  const client = getClient();
  const { data } = await client.query({ query, variables: { slug } });
  return data;
}