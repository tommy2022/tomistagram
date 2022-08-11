import React from "react";
import ImageGallery from "react-image-gallery";
import { Box } from "@chakra-ui/react";

export default function PostImage({ imgs, onDoubleClick }) {
  const imagesObj = imgs.map((img) => {
    return {
      original: img,
    };
  });
  console.log(imagesObj);
  const settings = {
    showBullets: true,
    onErrorImageURL: process.env.PUBLIC_URL + "/notfound.jpeg",
    showPlayButton: false,
    showFullscreenButton: false,
  };
  console.log(imagesObj);
  return (
    <Box id="gallery wrapper" w="100%" onDoubleClick={onDoubleClick}>
      <ImageGallery items={imagesObj} {...settings} />
    </Box>
  );
}
