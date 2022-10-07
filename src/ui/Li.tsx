import { ListItem } from '@chakra-ui/react';
import React from 'react';

export default function Li() {
  return (
    <ListItem
      border='1px'
      borderRadius='15px'
      py={1}
      px={2}
      fontSize={16}
      _first={{ marginLeft: '1rem' }}
      _last={{ marginRight: '1rem' }}
    >
      Shoes
    </ListItem>
  );
}
