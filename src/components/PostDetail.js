import React, { useState } from "react";
import Moment from "react-moment";
import {
  Box,
  Center,
  Flex,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Image,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { onGoing, PRESENT } from "../utility";

const jib =
  "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.";

export default function PostDetail({ content }) {
  const { title, description, img, startDate, endDate } = content;
  const [liked, setLiked] = useState(content.liked);

  const toggleLiked = () => {
    setLiked(!liked);
    content.liked = !liked;
  };

  const doubleClickLike = () => {
    setLiked(true);
    content.liked = true;
  };

  const shareButton = () => {
    window.alert(`ooops. this is embarrasing...
    I'm still thinking about what feature to do with the share button`);
  };

  const heart_color = "237,73,86";
  return (
    <>
      <ModalOverlay />
      <ModalContent m={15} height="80vh">
        <Box h="100%" bg="black">
          <Flex h="100%" w="100%">
            <Center flex="1" maxH="100%">
              <Image
                src={img}
                w="100%"
                onDoubleClick={() => doubleClickLike()}
              />
            </Center>
            <Box h="100%" maxW="500px" width="45%" bg="white">
              <ModalCloseButton />
              <VStack h="100%">
                <Box h="49px" width="100%">
                  <Heading
                    as="h4"
                    size="md"
                    justifyContent="flex-start"
                    my={3}
                    mx={6}
                  >
                    {title}
                  </Heading>
                  <hr />
                </Box>
                <ModalBody>{jib}</ModalBody>
                <Box h="90px" w="100%">
                  <hr />
                  <VStack w="100%" px={2}>
                    <Box m={0} w="100%" justifyContent="flex-start">
                      <IconContext.Provider
                        value={{
                          color: liked ? `rgb(${heart_color})` : "black",
                          className: "global-class-name",
                          size: "22px",
                        }}
                      >
                        <Box d="inline-block" m={1} mb={0}>
                          {liked ? (
                            <FaHeart onClick={() => toggleLiked()} />
                          ) : (
                            <FaRegHeart onClick={() => toggleLiked()} />
                          )}
                        </Box>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          className: "global-class-name",
                          size: "22px",
                        }}
                      >
                        <Box d="inline-block" m={1} mb={0}>
                          <FiSend onClick={() => shareButton()} />
                        </Box>
                      </IconContext.Provider>
                    </Box>
                    <Text
                      fontSize="sm"
                      w="100%"
                      justifyContent="flex-start"
                      style={{
                        fontWeight: "bold",
                        marginTop: "0px",
                        padding: "0px 5px",
                      }}
                    >
                      &#8501; {liked ? " + 1" : ""} likes
                    </Text>
                    <Text
                      fontSize="xs"
                      w="100%"
                      justifyContent="flex-start"
                      style={{
                        marginTop: "-2px",
                        textTransform: "uppercase",
                        fontFamily: "system-ui, Courier New",
                        color: "#8E8E8E",
                        padding: "0px 5px",
                      }}
                    >
                      <Moment parse="MM-YYYY" format="MMMM YYYY">
                        {startDate}
                      </Moment>
                      {endDate === "" ? null : (
                        <>
                          <span> (Last Updated </span>
                          <Moment parse="MM-YYYY" format="MMMM YYYY">
                            {endDate === PRESENT ? onGoing() : endDate}
                          </Moment>
                          )
                        </>
                      )}
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </ModalContent>
    </>
  );
}
