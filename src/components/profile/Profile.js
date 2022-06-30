import React, { useContext } from 'react';
import { Box, Container, Text, VStack, Image } from '@chakra-ui/react';
import { LoginContext } from '../../context/LoginContext';
import hla from '../../img/hla.svg';
const Profile = () => {
  const { username } = useContext(LoginContext);
  return (
    <>
      <Container>
        <VStack spacing={4} align="stretch">
          <Box>
            <Image
              src={hla}
              alt="image log in"
              w={350}
              h={350}
              ml={['0', '60px']}
            />
          </Box>
          <Text fontSize="4xl">Hey: {username}</Text>
        </VStack>
      </Container>
    </>
  );
};

export default Profile;
