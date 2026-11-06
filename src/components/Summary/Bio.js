import React from "react";
import {
  Center,
  Button,
  HStack,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Summary from "./Summary";
import { projects } from "../Project";
import { experiences } from "../Experience";
import { others } from "../Other";

export default function Bio() {
  let moment = require("moment");
  const bday = moment("2001-12-30", "YYYY-MM-DD");
  const today = moment().startOf("day");

  const daysOld = Math.round(moment.duration(today.diff(bday)).asDays());
  const numPosts = projects.length + experiences.length + others.length;
  return (
    <Summary img={process.env.PUBLIC_URL + "/pfp.jpg"}>
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
          maxW="40em"
          columns={[1, null, 3]}
          spacing={[1, 2, 3]}
        >
          <Text as="span">
            <Text as="span" style={{ fontWeight: "bold" }}>
              {numPosts}
            </Text>{" "}
            posts
          </Text>
          <Text as="span">
            <Text as="span" style={{ fontWeight: "bold" }}>
              {daysOld}
            </Text>{" "}
            days old
          </Text>
        </SimpleGrid>
        <Text>
          Hi there! I'm Tom, a Software Engineer and Integrations Lead at Revela
          in Detroit, where I build payments, integrations, and AI-powered
          workflow tools. I earned my B.S. and M.S. in Computer Science from the
          University of Michigan.
        </Text>
        <Text>
          Outside of work, you'll likely find me training for my next
          triathlon, blundering pieces in chess or traveling. I've been to 19
          countries
          and my favorite part about traveling has always been the food.
        </Text>
      </VStack>
    </Summary>
  );
}

//and of course its components like HStack and VStack that gives a mobile dev styling feel and the highly customizable responsive design it provides.
