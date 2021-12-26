import React from "react";
import { Image, Container, HStack, VStack, Box, Text, Flex, SimpleGrid } from "@chakra-ui/react";

export default function Bio() {
  let moment = require("moment");
  const bday = moment("2001-12-30", "YYYY-MM-DD");
  const today = moment().startOf('day');

  const daysOld = moment.duration(today.diff(bday)).asDays();

  return (
    <Container m={[2, 4, 6, 8]} w="full" maxW="100%">
    <Flex>
      <HStack spacing={[8, 12, 16, 24]} w="full">
        <Image
          borderRadius="full"
          boxSize={[100, 125, 150, 200]}
          src={process.env.PUBLIC_URL + "/pfp.jpg"}
          alt="Profile Picture"
        />
        <VStack w="full" align="flex-start">
          <Text fontSize="2xl">Xiangyu Qin</Text>
          <SimpleGrid w="full" maxW="30em" columns={[1, null, 3]} spacing={[1, 2, 3]}>
            <Text as="span"><Text as="span" style={{fontWeight: "bold"}}>{daysOld}</Text> days old</Text>
            <Text as="span"><Text as="span" style={{fontWeight: "bold"}}>57</Text> animes watched</Text>
            
          </SimpleGrid>
          <Box>Hello</Box>
          <Box>Hi</Box>
          <Box>Bye</Box>
        </VStack>
      </HStack>
      </Flex>
    </Container>
  );
}
