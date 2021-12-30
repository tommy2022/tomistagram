import React from "react";
import Gallery from "./Posts/Gallery";
import { compareDates, PRESENT, initializePostObj } from "../utility";

const others = [
  {
    title: "Chakra UI",
    subtitle: "",
    description: "aa",
    imgs: ["chakra.png"],
    startDate: "08-2021",
    endDate: "",
    tags: ["TA", "Discrete Math", "Logic"],
  },
  {
    title: "University of Michigan",
    subtitle: "Research Assistant",
    description: "its a game website",
    imgs: ["m.png"],
    startDate: "12-2021",
    endDate: PRESENT,
    tags: ["Research", "Python", "Topic Modelling"],
  },
  {
    title: "PID Inc.",
    subtitle: "pid.jpeg",
    description: "its a sudoku website",
    imgs: ["pid.jpeg"],
    startDate: "09-2020",
    endDate: "08-2021",
    tags: [
      "Python",
      "Opencv",
      "Computer Vision",
      "Machine Learning",
      "Swimming?"
    ],
  },
  {
    title: "Cookpad",
    subtitle: "cookpad.webp",
    description: "its a sudoku website",
    imgs: ["cookpad.jpeg"],
    startDate: "08-2021",
    endDate: "08-2021",
    tags: ["Javascript", "HTML/CSS", "Next.js", "Ruby", "Rails"],
  },
];

others.sort((a, b) => (compareDates(a, b) ? 1 : -1));

initializePostObj(others, "/otherImg/");

export default function Other() {
  return <Gallery contents={others} />;
}
