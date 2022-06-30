import React, { useState, useContext } from 'react';
import {
  Input,
  Button,
  VStack,
  Box,
  Container,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import loginImage from '../img/Login.svg';
import { LoginContext } from '../context/LoginContext';
const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);
  return (
    <>
      <Container>
        <VStack spacing={4} align="stretch">
          <Box>
            <Image
              src={loginImage}
              alt="image log in"
              w={350}
              h={350}
              ml={['0', '60px']}
            />
          </Box>
          <Box>
            <Stack spacing={3}>
              <Input
                variant="outline"
                placeholder="Enter your name 💡"
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={4} align="center">
              <Button
                colorScheme="teal"
                variant="outline"
                w="100%"
                onClick={() => {
                  setShowProfile(true);
                }}
              >
                Login
              </Button>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
