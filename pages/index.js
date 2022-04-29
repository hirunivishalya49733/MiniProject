import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button}  from '@chakra-ui/react';
import Property from '../components/Property';

import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ purpose, title1, desc1, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10' >
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5' >
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}</Text>
      <Button fontSize='xl' colorScheme='yellow'>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
)


export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    
    <Box>
    <Banner
      purpose='RENT A HOME'
      title1='Comfy Apartments For Rent'
      desc1=' Explore luxury apartments, houses, villas & more'
      buttonText='Start Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
 

<Banner
      purpose='BUY A HOME'
      title1=' Find & Buy The Perfect Home'
      desc1=' Find the house of your dreams'
      buttonText='Start Purchasing'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    
    </Box>
    
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}