import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      marginTop="3rem"
      textAlign="center"
      p="5"
      color="gray.600"
      borderColor="gray.100"
      fontWeight="black"
    >
      2022 Real Estate, Inc || Build by{' '}
      <a style={{ textDecoration: 'none' }} href="https://github.com/iamkelv/">
        Kelvin Moses
      </a>{' '}
      || Api by <a href="https://rapidapi.com/user/apidojo">Api Dojo</a>
    </Box>
  );
};

export default Footer;
