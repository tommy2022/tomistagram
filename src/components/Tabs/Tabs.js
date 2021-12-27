import React from "react";
import { Container, Center, HStack } from "@chakra-ui/react";
import Option from "./Option";

export default function Tabs() {
  return (
    <Container maxW="44em" mb={3}>
      <Center>
        <HStack spacing={12}>
          <Option to="/" text="Project" />
          <Option to="/experience" text="Experience" />
          <Option to="/courses" text="Courses" />
          <Option to="/other" text="Other" />
        </HStack>
      </Center>
    </Container>
  );
}
