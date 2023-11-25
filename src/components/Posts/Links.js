import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function HashTag({ links }) {
    const color = useColorModeValue("rgb(0, 55, 107)", "rgb(118, 176, 231)");
    if (links === undefined) {
        return null;
    }

    return (
        <>
            <Text
                mx={1}
                fontSize="sm"
                style={{ display: "inline-block" }}
            >
                Links:
            </Text>
            {links.map((linkObj, i) => (
                <a href={linkObj.link}>
                    <Text
                        mx={1}
                        fontSize="sm"
                        color={color}
                        style={{ display: "inline-block" }}
                    >
                        {linkObj.alias}
                    </Text>
                </a>
            ))}
        </>
    );
}
