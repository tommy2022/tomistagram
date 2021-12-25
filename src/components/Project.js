import React from "react";
import Gallery from "./Gallery";
import { compareDates, PRESENT } from "../utility";

const projects = [
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "01-2020",
    endDate: "",
  },
  {
    title: "Sudoku Website may",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "02-2021",
    endDate: "",
  },
  {
    title: "Sudoku Website feb",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "03-2021",
    endDate: PRESENT,
  },
  {
    title: "Sudoku Website feb",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "05-2021",
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

export default function Project() {
  return <Gallery contents={projects} />;
}
