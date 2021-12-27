import React from 'react'
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom'

export default function Option({to, text}) {
    const location = useLocation();

    to = process.env.PUBLIC_URL + to;
    
    const currentPage = location.pathname === to;

    return (
        <>
        {currentPage ? (
            <Box borderTop='1px' borderColor='black'>
                <Link to={to}>
                    <Box component="span">{text}</Box>
                </Link>
            </Box>
        ) : (
            <Box color="gray.500">
                <Link to={to}>
                    <Box component="span">{text}</Box>
                </Link>
            </Box>
        )}
        </>
    )
}
