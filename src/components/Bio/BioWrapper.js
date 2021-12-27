import React from 'react';
import './Orientation.css';
import { HStack, VStack } from "@chakra-ui/react";

export default function BioWrapper({children}) {
    return (
        <>
        <HStack spacing={[8, 12, 16, 24]} w="full" id="hstack">
            {children}
        </HStack>
        <VStack spacing={[4, 6, 8, 12]} w="full" id="vstack">
            {children}
        </VStack>
        </>
    )
}
