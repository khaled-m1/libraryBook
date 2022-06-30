import { Box, StackDivider, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import hdrImage from '../../img/about.svg';
const HdrAbout = () => {
  return (
    <>
      <VStack divider={<StackDivider borderColor="gray.200" />} align="center">
        <Box>
          <Image src={hdrImage} w={350} h={350} alt="Book Api" />
        </Box>
      </VStack>
    </>
  );
};

export default HdrAbout;
