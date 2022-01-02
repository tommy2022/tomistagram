import React from "react";
import {
  Image,
  Container,
  Center,
  Button,
  HStack,
  VStack,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SummaryWrapper from "./SummaryWrapper";

export default function Bio({ img, children }) {
  return (
    <Container m={[2, 4, 6, 8]} w="full" maxW="100%">
      <Flex>
        <SummaryWrapper>
          <Image
            borderRadius="full"
            boxSize={[100, 125, 150, 200]}
            src={img}
            alt="Profile/Summary Picture"
          />
          {children}
        </SummaryWrapper>
      </Flex>
    </Container>
  );
}
//and of course its components like HStack and VStack that gives a mobile dev styling feel and the highly customizable responsive design it provides.
