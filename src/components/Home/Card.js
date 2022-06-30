import React, { useState } from 'react';
import {
  Box,
  Image,
  Badge,
  Button,
  SimpleGrid,
  useDisclosure,
  Link,
} from '@chakra-ui/react';

const Card = ({ bookData }) => {
  return (
    <>
      <SimpleGrid
        columns={[1, 3, 3]}
        spacing="40px"
        mt={20}
        ml={['55px', '190px']}
        w={['70%']}
      >
        {bookData.map(item => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let title = item.volumeInfo.title;
          let tag = item.volumeInfo.publishedDate;
          let link = item.volumeInfo.previewLink;
          console.log(bookData);
          if (
            thumbnail != undefined &&
            title != undefined &&
            tag != undefined
          ) {
            return (
              <Link href={link} isExternal>
                <Box
                  maxW="sm"
                  maxH="600px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  justifyContent="center"
                >
                  <Image src={thumbnail} alt="Book" w="100%" h="300px" />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        {tag}
                      </Badge>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {title}
                    </Box>
                  </Box>
                </Box>
              </Link>
            );
          }
        })}
      </SimpleGrid>
    </>
  );
};

export default Card;
