import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Center, HStack } from "@chakra-ui/react";

export default function Options() {
  const root = process.env.PUBLIC_URL;
  console.log(root);
  return (
    <Container maxW="44em">
      <Center>
        <HStack spacing={12}>
          <Link to={root + "/"}>
            <Box component="span">Project</Box>
          </Link>
          <Link to={root + "/experience"}>
            <Box component="span">Experience</Box>
          </Link>
          <Link to={root + "/other"}>
            <Box component="span">Other</Box>
          </Link>
        </HStack>
      </Center>
    </Container>
  );
}
