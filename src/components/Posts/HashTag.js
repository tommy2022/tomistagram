import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HashTag({ text }) {
  text = text.replace(" ", "_");
  const root = process.env.PUBLIC_URL;
  return (
    <Link to={`${root}/tags/${text}`}>
      <Text
        mx={1}
        fontSize="sm"
        color="rgb(0, 55, 107)"
        style={{ display: "inline-block" }}
      >
        #{text}
      </Text>
    </Link>
  );
}
