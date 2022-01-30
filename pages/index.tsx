import { Container, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Container py={10}>
        <Stack>
          <Text fontSize='6xl'>Explore</Text>
          <Text fontSize='4xl'>Your astonishing city!</Text>
        </Stack>
      </Container>
    </>
  )
}

export default Home
