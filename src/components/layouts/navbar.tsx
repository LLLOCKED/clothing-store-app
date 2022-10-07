import { Box, Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';
import HomeIC from '../../assets/icons/home.svg';
import UserIC from '../../assets/icons/user.svg';
import AppsIC from '../../assets/icons/apps.svg';
import HeartIC from '../../assets/icons/heart.svg';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <Box w='100%' h='70px'  maxW='inherit' pos='fixed' zIndex={2} bottom={0} bg='gray.50' py={2}>
      <Flex w='100%' align='center' justify='space-around' overflow='hidden'>
        <NextLink href='/' passHref>
          <Link
            display='flex'
            alignItems='center'
            p={4}
            borderRadius='15px'
            bg={router.pathname === '/' ? 'gray.100' : ''}
            _active={{bg: 'gray'}}
          >
            <Image src={HomeIC} alt='home' width={25} height={25} />
          </Link>
        </NextLink>

        <NextLink href='/favor' passHref>
          <Link
            display='flex'
            alignItems='center'
            p={4}
            borderRadius='15px'
            bg={router.pathname === '/favor' ? 'gray.100' : ''}
            _active={{bg: 'gray'}}
          >
            <Image src={HeartIC} alt='heart' width={25} height={25} />
          </Link>
        </NextLink>
        <NextLink href='/apps' passHref>
          <Link
            display='flex'
            alignItems='center'
            p={4}
            borderRadius='15px'
            bg={router.pathname === '/apps' ? 'gray.100' : ''}
            _active={{bg: 'gray'}}
          >
            <Image src={AppsIC} alt='apps' width={25} height={25} />
          </Link>
        </NextLink>
        <NextLink href='/profile' passHref>
          <Link
            display='flex'
            alignItems='center'
            p={4}
            borderRadius='15px'
            bg={router.pathname === '/profile' ? 'gray.100' : ''}
            _active={{bg: 'gray'}}
          >
            <Image src={UserIC} alt='user' width={25} height={25} />
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
