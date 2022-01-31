import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { Business } from "../model/business.model";
import BusinessItem from "./business-item";


const SearchResult = ({ businesses }: { businesses?: Business[] }) => {
    return (
        <Container maxW='container.xl'>
            <Text fontSize='3xl' my={10}>Search Result:</Text>
            <Grid templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)', null, 'repeat(3, 1fr)']} gap={6}>
                {
                    businesses ? businesses.map(business => (
                        <GridItem w='100%' h='100%' display={'flex'} justifyContent={'center'} key={business.id}>
                            <BusinessItem business={business}/>
                        </GridItem>
                    )) : ''
                }

            </Grid>

        </Container>
    );
}

export default SearchResult;