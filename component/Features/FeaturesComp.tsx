'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          To Young Pet Parents 
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Our suite of pet parent tools is designed to enrich the lives of your furry family members, ensuring they are happy, healthy, 
  and cherished. From nutritional advice to training techniques—Vetti is your go-to for paw-sitive 
  pet parenting.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={3} justify="center">
          <Card
            heading={'Recipe Maker'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Create healthy homemade meals with our Dog Food Recipe Builder. Tailored to your pup’s unique dietary needs, discover the joy of home-cooked meals.'}
            href={'/recipetool'}
          />
          <Card
            heading={'Kibble Analyzer'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Not sure about your dog’s kibble? Just upload an image and get an instant answers! Figure out the ingredients and find out if it’s the healthiest choice for your fur family.'}
            href={'/kibbletool'}
          />
          <Card
            heading={'Paws & Reflect'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Have questions about your dog’s behavior or wellbeing? Our agents are here to lend an ear and offer advice — We fetch answers for all your canine questions day or night!'}
            href={'/Chatbot'}
          
          />
          
        </Flex>
      </Container>
    </Box>
  )
}