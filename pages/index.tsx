import { Container, Stack, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Search from '../components/search'
import SearchResult from '../components/search-result'
import api_categories from '../categories.json';
import api_location from '../countries.json';
import { Category } from '../model/category.model';
import { useSelector } from 'react-redux';



export const getStaticProps: GetStaticProps<{ categories: Category[], locations: any }> = async () => {
  return {
    props: {
      categories: api_categories,
      locations: api_location
    },
  };
}

const Home = ({ categories, locations }) => {
  const businessSearchResult = useSelector(state => state['businessSearchResult']);
  return (
    <>
      <Container py={10}>
        <Stack>
          <Text fontSize='6xl'>Explore</Text>
          <Text fontSize='4xl'>Your astonishing city!</Text>
        </Stack>
      </Container>
      <Search categories={categories} locations={locations} />
      <SearchResult businesses={businessSearchResult} />
    </>

  )
}

export default Home
