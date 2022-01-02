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
import { AiFillGithub, AiFillHome } from "react-icons/ai";

export default function Header() {
  const title = {
    fontFamily: "Brush Script MT, Comic Sans",
  };

  const maincolor = useColorModeValue("white", "rgb(23, 29, 42)");

  return (
    <Container bg={maincolor} w="100%" maxW="100%">
      <Container maxW="62em" mx="auto" p={1}>
        <Flex>
          <Box p="2" w="100%">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Heading fontSize={["lg", "xl", "2xl", "3xl"]} style={title}>
                Tomistagram
              </Heading>
            </Link>
          </Box>
          <Spacer />
          {/* <Box w="100%">
            <Center h="100%">
              <Heading
                fontSize={["xl", "2xl", "3xl"]}
                onClick={() => window.alert("Work in progress. Coming soon")}
              >
                Search Bar
              </Heading>
            </Center>
          </Box>
          <Spacer /> */}
          <Box w="100%">
            <HStack
              h="100%"
              justify="flex-end"
              spacing={["8px", "10px", "12px"]}
            >
              <Tooltip label="Home">
                <Link to="/">
                  <AiFillHome size="25px" />
                </Link>
              </Tooltip>
              <Tooltip label="Github">
                <a href="https://github.com/tommy2022" target="_blank">
                  <AiFillGithub size="25px" />
                </a>
              </Tooltip>
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
