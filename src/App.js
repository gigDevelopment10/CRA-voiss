import React, { Suspense } from 'react';
import {
  ChakraProvider,
  Button,
  Box,
  VStack,
  Grid,
  theme,
  Link,
  HStack,
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
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="75vh" p={3}>
          <HStack justifySelf="right">
            <Button colorScheme={'red'}>Home</Button>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
          <VStack spacing={8}>
            <div fontFamily="Source Sans Pro">
              <Logo h="70vmin" pointerEvents="none" />
              This is Alan the bot <br />
              <br />
              <Link to="./Cards">
                <Button colorScheme="red">Lets Explore More</Button>
              </Link>
            </div>
          </VStack>
        </Grid>
      </Box>
      <Canvas>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Dance />
        </Suspense>
      </Canvas>

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
