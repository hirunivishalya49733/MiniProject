import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' fontStyle='Raleway' color='#e6b800' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>COMFY NEST</Link>
    </Box>
    <Spacer/>
    
      <Flex>
       
      <Link href='/' passHref>
        <Button
          as='a'
          variant='ghost'
          aria-label='Home'
          w='100%'
          >
            Home
        </Button>
            
          </Link>

          <Link href='../login' passHref>
        <Button
          as='a'
          variant='ghost'
          aria-label='Login'
          w='100%'
          >
            Login
        </Button>
            
          </Link>

          <Link href='/search' 
          passHref>
        <Button
          as='a'
          variant='ghost'
          aria-label='search'
          w='100%'
          >
           Filter
        </Button>
            
          </Link>

          <Link href='/search?purpose=for-sale' passHref>
        <Button
          as='a'
          variant='ghost'
          aria-label='Buy Property'
          w='100%'
          >
           Purchase 
        </Button>
            
          </Link>
          
          <Link href='/search?purpose=for-rent' passHref>
        <Button
          as='a'
          variant='ghost'
          aria-label='Rent Property'
          w='100%'
          >
           Rent 
        </Button>
            
          </Link>
          
      </Flex>
    
  </Flex>
);

export default Navbar;