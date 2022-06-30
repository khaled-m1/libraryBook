import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  StackDivider,
  Box,
  Button,
  Stack,
} from '@chakra-ui/react';
const Forms = ({ onChange, search, searchBook }) => {
  return (
    <>
      <VStack divider={<StackDivider borderColor="white" />} align="center">
        <Box w={['80%', '450px']}>
          <FormControl>
            <Input
              id="searchid"
              placeholder="Search and Enter 💡"
              onChange={onChange}
              value={search}
              onKeyPress={searchBook}
            />
          </FormControl>
        </Box>
      </VStack>
    </>
  );
};

export default Forms;
