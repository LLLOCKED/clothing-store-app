import { Box, Flex, Grid, Heading, Skeleton, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useGetNewQuery } from '../../../store/clothes/clothes.api';
import Button from '../../../ui/Button';

export default function New() {
  const { data, isLoading } = useGetNewQuery({});

  return (
    <Box>
      <Heading as='h2' size='xl' marginLeft={5}>
        WHAT`S NEW?
      </Heading>
      <Grid
        gridTemplateColumns='repeat(2, 1fr)'
        gridTemplateRows='repeat(3, 1fr)'
        gridColumnGap={5}
        gridRowGap={5}
        my={5}
      >
        <Box gridArea='1/1/4/2' position='relative' height='280px'>
          <Image src='/203102994-2.webp' alt='new' objectFit='cover' layout='fill' />
        </Box>
        <Box gridArea='1/2/3/3' position='relative' height='200px'>
          <Image src='/203102994-3.webp' alt='new' objectFit='cover' layout='fill' />
        </Box>
        <Box gridArea='3/2/4/3' position='relative' height='q00px'>
          <Image src='/203102994-1-junebug.webp' alt='new' objectFit='cover' layout='fill' />
        </Box>
      </Grid>
      {!isLoading ? (
        <Box mx={5}>
          <Text as='b' fontSize={26} mb={2}>
            {data?.title?.toUpperCase()}
          </Text>
          <Text fontSize={16}>{data?.description}</Text>
          <Flex justifyContent='space-between' mt={2}>
            <Text fontSize={26}>{data?.price}$</Text>
            <Button title='Add to cart' type='full' />
          </Flex>
        </Box>
      ) : (
        <Box mx={5}>
          <Skeleton height={26} mb={2} />
          <Skeleton height={16} />
        </Box>
      )}
    </Box>
  );
}
