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
import BioWrapper from "./BioWrapper";

export default function Bio() {
  let moment = require("moment");
  const bday = moment("2001-12-30", "YYYY-MM-DD");
  const today = moment().startOf("day");

  const daysOld = moment.duration(today.diff(bday)).asDays();

  return (
    <Container m={[2, 4, 6, 8]} w="full" maxW="100%">
      <Flex>
        <BioWrapper>
          <Image
            borderRadius="full"
            boxSize={[100, 125, 150, 200]}
            src={process.env.PUBLIC_URL + "/pfp.jpg"}
            alt="Profile Picture"
          />
          <VStack w="full" align="flex-start">
            <HStack spacing={[3, 4, 5]}>
              <Text as="span" fontSize="2xl">
                Xiangyu (Tom) Qin
              </Text>
              <Center>
              <Link to="/resume.pdf" target="_blank">
                <Button borderRadius="sm" bg="blue.500" color="white" size="xs">
                  Resume
                </Button>
                </Link>
              </Center>
            </HStack>
            <SimpleGrid
              w="full"
              maxW="30em"
              columns={[1, null, 3]}
              spacing={[1, 2, 3]}
            >
              <Text as="span">
                <Text as="span" style={{ fontWeight: "bold" }}>
                  {daysOld}
                </Text>{" "}
                days old
              </Text>
              <Text as="span">
                <Text as="span" style={{ fontWeight: "bold" }}>
                  57
                </Text>{" "}
                animes watched
              </Text>
            </SimpleGrid>
            <Text>
              I am a third-year student in Computer Science at the University of
              Michigan. Outside of work and academics, you'll likely not find me
              not doing any of Swimming, working on Jigsaw Puzzles, Cooking, and
              playing Super Smash Bros. Or, if we apply De Morgan's, you will
              probably find me Swimming &or; Jigsaw Puzzle &or; Cooking &or;
              Super Smash Bros.
            </Text>
            <Text>
              My current favorite tech stack is Chakra UI. I mean, how freakin
              cool is it to be able to
              <Text as="i"> import Chakra. </Text>
              (and of course its features as well, but that will be too long for
              my short bio so I'll make a post under "others") And yes, this
              website is styled using Chakra :)
            </Text>
            <Text>
              TODO 1: Fill in description for posts <br />
              There's 3 more TODOs left for this page. Can you find all three of them?
            </Text>
          </VStack>
        </BioWrapper>
      </Flex>
    </Container>
  );
}
//and of course its components like HStack and VStack that gives a mobile dev styling feel and the highly customizable responsive design it provides.
