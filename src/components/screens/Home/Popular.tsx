import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useGetListQuery } from '../../../store/clothes/clothes.api';
import ItemProduct from '../../../ui/ItemProduct';

export default function Popular() {
  const { data, isLoading } = useGetListQuery(5);

  return (
    <Box>
      <Heading as='h2' size='xl' margin={5}>
        POPULAR
      </Heading>
      <Box mx={5}>
        {data?.map((item) => {
          return (
            <ItemProduct
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </Box>
    </Box>
  );
}
