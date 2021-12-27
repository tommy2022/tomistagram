import React from "react";
import { useParams } from "react-router-dom";

export default function Tags() {
  const { tagname } = useParams();
  return (
    <div>
      Page for {tagname} tag. Coming soon (More precisely, when I finish search
      bar)
    </div>
  );
}
