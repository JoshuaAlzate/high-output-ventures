import gql from 'graphql-tag';

const searchQuery = gql`
  query Search($category: String!, $location: String!) {
    search(categories: $category, location: $location) {
      business {
        id
        name
        url
        rating
        categories {
          title
        }
        location {
          formatted_address
        }
        photos
      }
    }
  }
`;

export default searchQuery;
