import React from "react";
import { Image, Container, HStack, VStack, Box, Text } from "@chakra-ui/react";

export default function Bio() {
  return (
    <Container m={8}>
      <HStack spacing={24}>
        <Image
          borderRadius="full"
          boxSize={[100, 125, 150, 200]}
          src={process.env.PUBLIC_URL + "/pfp.jpg"}
          alt="Profile Picture"
        />
        <VStack>
          <Text fontSize="2xl">Xiangyu Qin</Text>
          <Box>Hello</Box>
          <Box>Hello</Box>
          <Box>Hello</Box>
        </VStack>
      </HStack>
    </Container>
  );
}
