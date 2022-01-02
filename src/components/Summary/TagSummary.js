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
import Summary from "./Summary";

export default function TagSummary({ img, tagname, numPosts }) {
  if (img == null) return null;
  return (
    <Summary img={img}>
      <VStack w="full" align="flex-start">
        <Text as="span" fontSize="2xl">
          &#35;{tagname}
        </Text>
        <Text as="span">
          <Text as="span" style={{ fontWeight: "bold" }}>
            {numPosts}
          </Text>{" "}
          posts
        </Text>
      </VStack>
    </Summary>
  );
}

//and of course its components like HStack and VStack that gives a mobile dev styling feel and the highly customizable responsive design it provides.
