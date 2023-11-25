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
  VStack,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { onGoing } from "../../Utility";
import { PRESENT } from "../../Constants";
import HashTag from "./HashTag";
import PostImage from "./PostImage";
import Links from "./Links";

export default function PostDetail({ content }) {
  const { title, subtitle, description, imgs, startDate, endDate, tags, links } =
    content;
  const [liked, setLiked] = useState(content.liked);

  const color = useColorModeValue("black", "white");
  const backcolor = useColorModeValue("gray.50", "rgb(26, 32, 44)");

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
            <Center flex="1" maxH="100%" maxW="100%" w="100%">
              <PostImage imgs={imgs} onDoubleClick={() => doubleClickLike()} />
            </Center>
            <Box h="100%" maxW="500px" width="45%" bg={backcolor}>
              <ModalCloseButton />
              <VStack h="100%">
                <Box width="100%">
                  <Heading
                    as="h4"
                    size="md"
                    justifyContent="flex-start"
                    mt={3}
                    mx={4}
                  >
                    {title}
                  </Heading>
                  <Heading
                    as="h4"
                    size="sm"
                    justifyContent="flex-start"
                    mb={1}
                    mx={4}
                  >
                    {subtitle}
                  </Heading>
                  <hr />
                </Box>
                <ModalBody
                  w="100%"
                  textAlign={"left"}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {description}
                </ModalBody>
                <Box px={2} w="100%" justifyContent="flex-start">
                  <Links links={links} />
                </Box>
                <Box px={2} w="100%" justifyContent="flex-start">
                  {tags.map((tag, i) => (
                    <HashTag text={tag} key={i} />
                  ))}
                </Box>
                <Box h="90px" w="100%">
                  <hr />
                  <VStack w="100%" px={2}>
                    <Box m={0} w="100%" justifyContent="flex-start">
                      <IconContext.Provider
                        value={{
                          color: liked ? `rgb(${heart_color})` : color,
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
