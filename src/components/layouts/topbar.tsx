import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SearchIC from '../../assets/icons/search.svg';
import CartIC from '../../assets/icons/cart.svg';

export default function topbar() {
  return (
    <Flex w='100%' align='center' justify='space-between' py={6} px={4}>
      <Image src={SearchIC} alt='search' width={25} height={25} />
      <Text fontSize={28}> D`ALMI </Text>
      <Flex position='relative' align='center'>
        <Image src={CartIC} alt='search' width={25} height={25} />
        <Box
          position='absolute'
          left='-2'
          fontSize='12px'
          px='6px'
          textAlign='center'
          bg='black'
          borderRadius='50%'
          color='white'
          opacity={0.9}
        >
          1
        </Box>
      </Flex>
    </Flex>
  );
}
