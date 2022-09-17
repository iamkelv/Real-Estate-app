import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import Footer from './Footer';
import { HeroSection } from './HeroSection';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate </title>
      </Head>
      <NavBar />
      <HeroSection />
      <Box
        maxWidth="90%"
        top="0"
        margin="auto"
        justifyContent="center"
        marginTop="0"
        padding="0"
      >
        <header></header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};
export default Layout;
