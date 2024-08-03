import React from 'react';
import { Flex, Box, Stack, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from './logo';

const Nav = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      paddingY="1.5em"
      bg="rgba(255,255,255,.8)"
      color="black"
      textTransform="uppercase"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#FBA442"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', 'auto', 'auto']}
        textAlign="center"
        alignItems="center"
      >
        <Link to="/">
          <MenuItems>Home</MenuItems>
        </Link>
        <Link to="/about">
          <MenuItems>About</MenuItems>
        </Link>
        <Link to="/services">
          <MenuItems>Services</MenuItems>
        </Link>
        <Link to="/our-projects">
          <MenuItems>Gallery</MenuItems>
        </Link>
        <Link to="/blog">
          <MenuItems>Blog</MenuItems>
        </Link>
        <Link to="/contact">
          <MenuItems>Contact</MenuItems>
        </Link>
        <Stack spacing={0} direction="row" align="center" marginLeft={20}>
          <Button variantColor="yellow">Create an account</Button>
          <Button variantColor="yellow" variant="ghost">
            Sign in
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export default Nav;