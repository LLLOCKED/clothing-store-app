import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Button from './Button';

interface Product {
  title: string;
  price: string;
  description: string;
}

export default function ItemProduct({ title, price, description }: Product) {
  return (
    <Box>
      <Box
        display='grid'
        columnGap={5}
        height='300px'
        my={5}
        gridTemplateColumns='repeat(2, 1fr)'
        gridTemplateRows='1fr'
      >
        <Box position='relative'>
          <Image src='/203102994-1-junebug.webp' alt={title} objectFit='cover' layout='fill' />
        </Box>
        <Flex direction='column' justifyContent='space-between'>
          <Box>
            <Text as='b' fontSize={20}>
              {title?.toUpperCase()}
            </Text>
            <Text fontSize={16} noOfLines={2}>
              {description}
            </Text>
          </Box>
          <Box>
            <Text fontSize={26} mb={3}>{price}$</Text>
            <Button style={{width: '100%'}} title='Add to cart' type='full' />
          </Box>
        </Flex>
      </Box>
      <List w='100%' overflow='auto' display='flex' columnGap={3}>
        <ListItem>
          <Image
            src='/203102994-1-junebug.webp'
            alt={title}
            objectFit='cover'
            width='200px'
            height='200px'
          />
        </ListItem>
        <ListItem>
          <Image
            src='/203102994-2.webp'
            alt={title}
            objectFit='cover'
            width='200px'
            height='200px'
          />
        </ListItem>
        <ListItem>
          <Image
            src='/203102994-3.webp'
            alt={title}
            objectFit='cover'
            width='200px'
            height='200px'
          />
        </ListItem>
      </List>
    </Box>
  );
}
