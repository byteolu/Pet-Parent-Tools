'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function HomeHeroSectionWithImg() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(/img/pet-home-life.png)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Find The Perfect Tool, From Our Pet Parent Toolbox!
          </Text>
          <Stack direction={'row'}>
            <Button
              href='/pet-parent-tools'
              as = {"a"}
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
            Pet Parent Tools 
            </Button>
           
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}