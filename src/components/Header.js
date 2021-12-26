import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Container,
  Image,
  HStack,
  Center,
  Flex,
  Spacer,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Header() {
  const logo_style = {
    display: "inlineBlock",
    width: "40px",
    height: "auto",
  };

  const mail_style = {
    display: "inlineBlock",
    width: "30px",
    height: "auto",
  };

  const title = {
    fontFamily: "Brush Script MT, Comic Sans",
    fontSize: "30px",
    color: "black",
  };

  const maincolor = useColorModeValue("white", "blue.800");

  const root = process.env.PUBLIC_URL;

  return (
    <Container bg={maincolor} maxW="62em" mx="auto" p={1}>
      <Flex>
        <Box p="2" w="100%">
          <HStack>
            <Link to="/">
              <Image
                src={root + "/instagram.jpg"}
                alt="insta logo"
                style={logo_style}
              />
            </Link>
            <Link to={root + "/"} style={{ textDecoration: "none" }}>
              <Heading size="md" style={title}>
                Tomistagram
              </Heading>
            </Link>
          </HStack>
        </Box>
        <Spacer />
        <Box w="100%">
          <Center>
            <Heading fontSize={["xl", "2xl", "3xl"]}>Search Bar</Heading>
          </Center>
        </Box>
        <Spacer />
        <Box w="100%">
          {/* <Flex>
            <Spacer /> */}
          <Center>
            <Link to="/">
              <img
                src={root + "/email.png"}
                alt="email logo"
                style={mail_style}
              />
            </Link>
          </Center>
          {/* </Flex> */}
        </Box>
      </Flex>
    </Container>
  );
}
