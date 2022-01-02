import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HashTag({ text }) {
  const root = process.env.PUBLIC_URL;

  const color = useColorModeValue("rgb(0, 55, 107)", "rgb(118, 176, 231)");
  return (
    <Link to={`/tags/${text}`}>
      <Text
        mx={1}
        fontSize="sm"
        color={color}
        style={{ display: "inline-block" }}
      >
        #{text}
      </Text>
    </Link>
  );
}
