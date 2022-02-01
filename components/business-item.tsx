import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Image, Link } from "@chakra-ui/react";
import { Business } from "../model/business.model";

const BusinessItem = ({ business }: { business: Business }) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={business.photos[0]} alt={business.name} height={300} width={'100%'} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline' overflow={'scroll'}>
                    {
                        business.categories ? business.categories.map(category => (
                            <Badge borderRadius='full' px='2' colorScheme='teal' key={category.alias}>
                                {category.title}
                            </Badge>
                        )) : ''
                    }
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {business.name}
                </Box>

                <Box>
                    {business.location?.formatted_address}
                </Box>
                <Flex justifyContent={'space-between'}>
                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < business.rating ? 'teal.500' : 'gray.300'}
                                />
                            ))}

                    </Box>
                    <Box>
                        <Link href={business.url} isExternal>
                            More Details <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Box>
                </Flex>

            </Box>
        </Box>
    )
}

export default BusinessItem;