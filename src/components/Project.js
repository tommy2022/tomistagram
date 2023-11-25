import React from "react";
import Gallery from "./Posts/Gallery";
import { compareDates, initializePostObj } from "../Utility";
import {
  PYTHON,
  JS,
  PHP,
  HTML,
  ML,
  CV,
  OPENCV,
  CPP,
} from "../Constants";

export const projects = [
  {
    title: "Sudoku Website",
    description: "Its a sudoku website! Worked on this before I learned React so this is coded in Pure Javascript. Generates a new puzzle on the spot in 2ms so each time you start a new game, you'll have a brand new puzzle to work with! \n\nThinking of re-writing this in React since I want to add functionalities for adding notes (the small number options in each cell).",
    imgs: ["sudoku.png"],
    startDate: "07-2020",
    endDate: "",
    tags: [JS, HTML, "Backtracking", "Bit Manupulation"],
    links: [
      {
        link: "https://tommy2022.github.io/SudokuWebsite/",
        alias: "Visit website"
      }
    ]
  },
  {
    title: "Game Website",
    description: "its a game website",
    imgs: ["spaceinvader.png", "flappyabe.png", "tetris.png"],
    startDate: "08-2020",
    endDate: "",
    tags: [JS, HTML, PHP],
  },
  {
    title: "Table Recognizer",
    description: "its a table recognizer",
    imgs: ["tablegrid.png", "tablecell.png"],
    startDate: "03-2021",
    endDate: "",
    tags: [PYTHON, OPENCV, CV, ML, "Swimming"],
  },
  {
    title: "Piazza Post Classifier",
    description: "Naive Bayes Classifier that classifies piazza posts into tags based on content of the post",
    imgs: ["piazza.jpeg"],
    startDate: "03-2020",
    endDate: "",
    tags: [CPP, ML],
  },
  {
    title: "Dog Breed Classification",
    description:
      "Classify dog breeds. Transfer learning..... 74% accuracy and 0.863 AUROC todo",
    imgs: ["dogs.png"],
    startDate: "04-2021",
    endDate: "",
    tags: ["CNN", ML, "Transfer Learning"],
  },
];

projects.sort((a, b) => (compareDates(a, b) ? 1 : -1));

initializePostObj(projects, "/ProjectImg/");

export default function Project() {
  return <Gallery contents={projects} />;
}
