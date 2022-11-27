// ready to deploy
import React, { Suspense } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from 'react';
import {
  ChakraProvider,
  Button,
  Box,
  VStack,
  Grid,
  theme,
  Link,
  HStack,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Dance from './Dance.js';
import './styles.css';
import { OrbitControls } from '@react-three/drei';

import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function App() {

  useEffect(() => {
    alanBtn({
      key: 'c62aa60334613b2305af1ca2e20ec5f32e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
    });
  }, []);




  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p="100px">
        <Grid minH="75vh" p={3}>
          <HStack justifySelf="right">
            <Button colorScheme={'red'}>Home</Button>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
          <VStack spacing={8}>
            <div fontFamily="Source Sans Pro">
              <Logo h="70vmin" pointerEvents="none" />
              I'm Giggles bot 👦 <br />
              <br />
              <Link to="./Cards">
                <Button colorScheme="red">Lets Explore More</Button>
              </Link>
            </div>
          </VStack>
        </Grid> 
        <br/>
        <br/>
        Hi there 👋 !! <br/>
        I can talk to you on a variety of topics 🤖 ! Ask me anything about weather ☁️ today or some mathematical questions 🚀 . I have answers to all 
your curiosity 🌋.
   
      </Box>
      <Canvas>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Dance />
        </Suspense>
      </Canvas>
      <div >
      </div>

      <Box textAlign={'center'}>
        <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Stack justify="space-between" direction="row" align="center">
              <Logo />
              <ButtonGroup variant="ghost">
                <IconButton
                  as="a"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="1.25rem" />}
                />
              </ButtonGroup>
            </Stack>
            <Text fontSize="sm" color="subtle">
              This is an AI project for VOISS-22
            </Text>
          </Stack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
