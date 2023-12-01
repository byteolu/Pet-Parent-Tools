'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { UserButton } from '@clerk/nextjs'

interface Props {
  children: React.ReactNode
}

// const Links = ['Pet Parents Dashboard', 'Blog', 'About']
const Links = ['Home', 'Toolbox', 'Blog']

const NavLink = (props: Props) => {
  const { children } = props;

  let href = '/'; // Default href (home) 
  if (children === 'Home') {
    href = '/'; // Dog Health Page 
  } else if (children === 'Toolbox') {
    href = '/pet-parent-tools'; //Dog Fitness Page
  } else if (children === 'Blog') {
    href = '/blog'; // URL for your Blog
  }
  const textColor = useColorModeValue('black', 'black.200');
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      color={textColor} 
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('black.200', 'black.700'),
      }}
      href={href}>
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'black.900')} px={4}>
    
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Pet Parent Toolbox</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              href='/Chatbot'
              as = {"a"}
              variant={'solid'}
              colorScheme={'blue'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              ChatBot
            </Button>
            <Menu>
            
            <UserButton> Login</UserButton>
            </Menu>
          </Flex>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )
}