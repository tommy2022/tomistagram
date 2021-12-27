import React from "react";
import Gallery from "./Posts/Gallery";
import { compareDates, PRESENT } from "../utility";

const projects = [
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "01-2020",
    endDate: "",
    tags: ["Javascript", "HTML/CSS", "Backtracking", "LOL"],
  },
  {
    title: "Piazza Post Classifier",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "02-2021",
    endDate: "",
    tags: ["C++", "Machine Learning"],
  },
  {
    title: "Sudoku Website feb",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "03-2021",
    endDate: PRESENT,
    tags: [
      "Javascript",
      "HTML/CSS",
      "Backtracking",
      "LOL",
      "Really_really_long_tag_that_requires_a_new_line",
    ],
  },
  {
    title: "Sudoku Website feb",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    startDate: "05-2021",
    endDate: "",
    tags: ["Javascript", "HTML/CSS", "Backtracking", "LOL"],
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/notfound.jpeg",
    startDate: "01-2021",
    endDate: "06-2021",
    tags: ["Javascript", "HTML/CSS", "Backtracking", "LOL"],
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
