'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth', // This ensures smooth scrolling
  });
};

export default function HeroSectionSplit() {

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
                as={'span'}
                position={'relative'}
                onClick={scrollToBottom}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                Find The Latest
              </Text>

            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
            Pet Parent News
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Find the latest pet parent trends, news, tools and more.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button 
            href='/blog'
            as = {"a"}
            rounded=
            {'full'}>
                Latest Post
                </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Dog Owners Club'}
          objectFit={'cover'}
          src={
            '/img/dog_group.jpg'           }
        />
      </Flex>
    </Stack>
  )
}