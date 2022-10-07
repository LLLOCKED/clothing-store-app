import { Box, List } from '@chakra-ui/react';
import React from 'react';
import Li from '../../../ui/Li';
import Layout from '../../layouts/layout';
import New from './New';
import Popular from './Popular';

export default function Home() {
  return (
    <Layout>
      <Box mb={6}>
        <List w='100%' overflow='auto' display='flex' columnGap={1.5}>
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
        </List>
      </Box>
      <New />
      <Popular />
      
    </Layout>
  );
}
