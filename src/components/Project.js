import React from "react";
import Gallery from "./Posts/Gallery";
import { compareDates, PRESENT, initializePostObj } from "../utility";

const projects = [
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    imgs: ["sudoku.png"],
    startDate: "07-2020",
    endDate: "",
    tags: ["Javascript", "HTML/CSS", "Backtracking", "Bit Manupulation"],
  },
  {
    title: "Game Website",
    description: "its a game website",
    imgs: ["spaceinvader.png", "flappyabe.png", "tetris.png"],
    startDate: "08-2020",
    endDate: "",
    tags: ["Javascript", "html/css", "php"],
  },
  {
    title: "Table Recognizer",
    description: "its a table recognizer",
    imgs: ["tablegrid.png", "tablecell.png"],
    startDate: "03-2021",
    endDate: "",
    tags: [
      "Python",
      "Opencv",
      "Computer Vision",
      "Machine Learning",
      "Swimming?"
    ],
  },
  {
    title: "Piazza Post Classifier",
    description: "its a sudoku website <- lol its not  ",
    imgs: ["piazza.jpeg"],
    startDate: "03-2020",
    endDate: "",
    tags: ["C++", "Machine Learning"],
  },
  {
    title: "Dog Breed Classification",
    description: "Classify dog breeds. Transfer learning..... 74% accuracy and 0.863 AUROC todo",
    imgs: ["dogs.png"],
    startDate: "04-2021",
    endDate: "",
    tags: ["CNN", "Machine Learning", "Transfer Learning", ""],
  },
];

projects.sort((a, b) => (compareDates(a, b) ? 1 : -1));

initializePostObj(projects, "/ProjectImg/");

export default function Project() {
  return <Gallery contents={projects} />;
}
