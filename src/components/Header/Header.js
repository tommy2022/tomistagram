import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Container,
  HStack,
  Center,
  Flex,
  Spacer,
  Box,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  const title = {
    fontFamily: "Brush Script MT, Comic Sans",
    fontSize: "30px",
  };

  const maincolor = useColorModeValue("white", "rgb(23, 29, 42)");

  const root = process.env.PUBLIC_URL;

  return (
    <Container bg={maincolor} w="100%" maxW="100%">
      <Container maxW="62em" mx="auto" p={1}>
        <Flex>
          <Box p="2" w="100%">
            <Link to={root + "/"} style={{ textDecoration: "none" }}>
              <Heading size="md" style={title}>
                Tomistagram
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box w="100%">
            <Center h="100%">
              <Heading
                fontSize={["xl", "2xl", "3xl"]}
                onClick={() => window.alert("Work in progress. Coming soon")}
              >
                Search Bar
              </Heading>
            </Center>
          </Box>
          <Spacer />
          <Box w="100%">
            <HStack h="100%" justify="flex-end">
              <Tooltip label="qinx@umich.edu">
                <a href="mailto:qinx@umich.edu">
                  <EmailIcon alt="email icon" w={10} h="25px" />
                </a>
              </Tooltip>
              <DarkModeButton />
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}
