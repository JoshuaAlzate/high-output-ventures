import { Box, Flex, Text, Button, Stack, useColorModeValue, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon, } from '@chakra-ui/icons';
import { NextComponentType } from 'next';
import Image from 'next/image';

const NavBar: NextComponentType = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        backgroundColor={useColorModeValue('gray.800', 'none')}
                        p={'5px'}
                        borderRadius={'10px'}>
                        <Image src="/logo-HoV.svg" alt="me" width={30} height={30} />
                    </Text>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
}

export default NavBar;