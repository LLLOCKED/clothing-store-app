import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from './navbar';
import Topbar from './topbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <Box mb='80px'>
          <Topbar />
          {children}
        </Box>
      </main>
    </>
  );
}
