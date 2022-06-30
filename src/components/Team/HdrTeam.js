import { Box, StackDivider, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import hdrImage from '../../img/team.svg';

const HdrTeam = () => {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} align="center">
      <Box>
        <Image src={hdrImage} w={350} h={350} alt="Book Api" />
      </Box>
    </VStack>
  );
};

export default HdrTeam;
