'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function HealthHeroSectionWithImg() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', // for a smooth scroll
    });
  };
  

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(/img/dognhumans_1.png)'
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
                        Look below to Find The Perfect Tool, From Our Toolbox!
          </Text>
          <Stack direction={'row'}>
          <Stack direction={'row'}>
      <Button
        onClick={scrollToBottom} 
        bg={'blue.400'}
        rounded={'full'}
        color={'white'}
        _hover={{ bg: 'blue.500' }}
      >
        Look Below!
      </Button>
    </Stack>
            
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}