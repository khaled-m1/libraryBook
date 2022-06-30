import { Box, Center, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <>
      <SimpleGrid columns={1} mt={6}>
        <Box height={['230px', '80px']}>
          <Center h="100px">
            <Icon as={ChevronUpIcon} /> _ <Icon as={ChevronUpIcon} />
          </Center>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Footer;
