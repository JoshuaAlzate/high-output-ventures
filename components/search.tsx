import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Category } from "../model/category.model";
import { useDispatch } from "react-redux";
import { updateBusinessSearchResult } from "../redux/actions/business.actions";

const Search = ({ categories, locations } : { categories: Category[], locations: { code: string, name: string }[]}) => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();

    const searchAction = async () => {
        const result = await fetch('/api/business', {
            method: 'POST',
            body: JSON.stringify({ category, location })
        }).then(searchResult => searchResult.json());
        dispatch(updateBusinessSearchResult(result?.search?.business));
    }

    return (
        <Container maxW='container.lg' centerContent display={'block'}>
            <Flex direction={['column', 'row']}>
                <Box flex={[1, 6]}>
                    What
                    <Select value={category} placeholder='Select Category' onChange={event => setCategory(event.target.value)}>
                        {categories ? categories.map(category => <option value={category.alias} key={category.alias}>{category.title}</option>) : ''}
                    </Select>
                </Box>

                <Box flex={[1, 4]}>
                    Where
                    <Select value={location} placeholder='Select Location' onChange={event => setLocation(event.target.value)}>
                        {locations ? locations.map(location => <option value={location.code} key={location.code}>{location.name}</option>) : ''}
                    </Select>
                </Box>
                <Button flex={[1, 2]} py={['10px', 'unset']} alignSelf={['normal', 'flex-end']} onClick={searchAction}>
                    <SearchIcon mr={2} />
                    Search
                </Button>

            </Flex>
        </Container>
    )
}

export default Search;