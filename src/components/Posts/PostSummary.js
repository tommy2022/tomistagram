import React from "react";
import Moment from "react-moment";
import { Image, VStack, Text } from "@chakra-ui/react";
import { PRESENT } from "../../utility";

export default function PostSummary({
  hovering,
  title,
  startDate,
  endDate,
  img,
}) {
  if (!hovering) {
    return <Image m={0} src={img} alt={`Image for post ${title}`} w="100%" maxH="100%"/>;
  }
  return (
    <VStack>
      <Text fontSize="xl" maxW="100%">
        {title}
      </Text>
      <Text fontSize="xl" maxW="100%">
        <Moment parse="MM-YYYY" format="MMM YYYY">
          {startDate}
        </Moment>
        {endDate === "" ? null : (
          <>
            <span> ~ </span>
            {endDate === PRESENT ? (
              PRESENT
            ) : (
              <Moment parse="MM-YYYY" format="MMM YYYY">
                {endDate}
              </Moment>
            )}
          </>
        )}
      </Text>
    </VStack>
  );
}
