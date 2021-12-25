import React, { useState } from "react";
import Gallery from "./Gallery";
import { compareDates, PRESENT } from "../utility";

const projects = [
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/instagram.jpg",
    startDate: "01-2020",
    endDate: PRESENT,
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/email.png",
    startDate: "01-2021",
    endDate: "",
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "12-2021",
    endDate: PRESENT,
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "09-2021",
    endDate: "",
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/notfound.jpeg",
    startDate: "01-2021",
    endDate: "06-2021",
  },
];

projects.sort((a, b) => (compareDates(a, b) ? 1 : -1));

projects.forEach((post) => {
  post.liked = false;
  post.img = process.env.PUBLIC_URL + post.img;
});

export default function Experience() {
  return <Gallery contents={projects} />;
}
