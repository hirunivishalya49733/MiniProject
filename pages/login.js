import { useState } from 'react';
import { useRouter } from 'next/router';
import {Box, Text, Heading, Link,   Flex,
    
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button,
    
    } from '@chakra-ui/react'


const Login = () => {
    const router = useRouter();
  return (
    <Flex width='1200px' justifyContent={'center'}>

    <Box textAlign='center'>
      <Heading color='#806600'>Login to Your Account</Heading>
        

      <Box my={8} textAlign='left'>
      <form>

      <FormControl>
      <FormLabel>User Name</FormLabel>
      <Input type='user name' placeholder='Enter your user name' />
    </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email Address</FormLabel>
          <Input type='email' placeholder='Enter your email address' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter your password' />
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>

                <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box> 

            <Stack isInline justifyContent='left' mt={4}>
            <Text> Don't have an account yet?</Text>
            <Text><Link href='../signup' color={`#806600`} passHref>Sign Up</Link>
      </Text>
            </Stack>
            
            </Stack>
            <Button colorScheme= 'yellow' width='600px' mt={4}fontWeight='bold' fontSize='lg'>Login as a Buyer</Button> 
            <Box>
            <Button colorScheme= 'yellow' width='600px' mt={2} fontWeight='bold'fontSize='lg'>Login as a Seller</Button>
            </Box>

            
     
        

        
      </form>
    </Box>
    
      
    </Box>
    </Flex>

  )
}

export default Login; 