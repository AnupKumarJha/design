import React from 'react';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center" // Center aligns all children along the cross axis
      justifyContent="center" // Optionally add this if you want to center content vertically too
      mt="24" // Margin top
      bgGradient="linear(to-r, teal.500, green.500)" // Gradient background
      p="20px" // Padding
      borderRadius="lg" // Rounded corners
      boxShadow="xl" // Shadow
    >
      <Heading as="h1" textTransform="uppercase" mb="20px" size="2xl" color="white">
        Welcome to Our Home Page
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center" color="whiteAlpha.800">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
      <Button colorScheme="teal" variant="solid" size="lg" _hover={{ bg: "green.400" }}>
        Learn More
      </Button>
      <Box mt="20px">
        {/* Add more content here as needed */}
      </Box>
    </Flex>
  );
};

export default Home;
