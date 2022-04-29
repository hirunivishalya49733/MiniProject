import { useRouter } from 'next/router';
import {Box, Text, Heading, Link,   Flex,
    
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button,
    
    } from '@chakra-ui/react'


const SignUp = () => {
    const router = useRouter();
  return (
    <Flex width='1200px' justifyContent={'center'}>

    <Box textAlign='center'>
      <Heading color='#806600'>Sign Up</Heading>
        

      <Box my={8} textAlign='left'>
      <form>

      <FormControl>
      <FormLabel>First Name</FormLabel>
      <Input type='first name' placeholder='Enter your first name' />
    </FormControl>

    <FormControl mt={4}>
      <FormLabel>Last Name</FormLabel>
      <Input type='last name' placeholder='Enter your last name' />
    </FormControl>

    <FormControl mt={4}>
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

        <FormControl mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type='password' placeholder='Confirm your password' />
        </FormControl>
             
        <FormControl mt={4}>
          <FormLabel>Create Account as a</FormLabel>
          <Checkbox>Buyer</Checkbox>
          <Box>
          <Checkbox>Seller</Checkbox>
          </Box>
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>
            <Box>
              
            </Box> 
            </Stack>
            
            
            
            <Box>
            <Button colorScheme= 'yellow' width='600px' mt={2} fontWeight='bold'fontSize='lg'>Create an Account</Button>
            </Box>

        
      </form>
    </Box>
    
      
    </Box>
    </Flex>  
    
    
  )
       
      
  
}




export default SignUp;