import React from "react";
import Gallery from "./Posts/Gallery";
import { compareDates, initializePostObj } from "../Utility";

export const others = [];

others.sort((a, b) => (compareDates(a, b) ? 1 : -1));

initializePostObj(others, "/OtherImg/");

export default function Other() {
  return <Gallery contents={others} />;
}
