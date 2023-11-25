import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./Project";
import { experiences } from "./Experience";
import { others } from "./Other";
import { compareDates } from "../Utility";
import Gallery from "./Posts/Gallery";
import { Container } from "@chakra-ui/react";
import TagSummary from "./Summary/TagSummary";

export default function Tags() {
  const { tagname } = useParams();
  const [posts, setPosts] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    const pages = [projects, experiences, others];
    let arr = [];
    pages.forEach((obj) => {
      const filtered = obj.filter((post) => post.tags.includes(tagname));
      arr = arr.concat(filtered);
    });
    arr.sort((a, b) => (compareDates(a, b) ? 1 : -1));
    setPosts(arr);
    if (arr.length > 0) setImg(arr[0].imgs[0]);
  }, [tagname]);

  if (posts == null) return null;

  if (posts.length === 0) {
    return <div> Oops no post matching &#35;{tagname} found</div>;
  }

  return (
    <Container maxW="100%">
      <TagSummary tagname={tagname} img={img} numPosts={posts.length} />
      <hr />
      <div id="posts">
        <Gallery contents={posts} />
      </div>
    </Container>
  );
}
