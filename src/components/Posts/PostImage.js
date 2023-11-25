import React from "react";
import ImageGallery from "react-image-gallery";
import { Box } from "@chakra-ui/react";
import "react-image-gallery/styles/css/image-gallery.css";

export default function PostImage({ imgs, onDoubleClick }) {
  const imagesObj = imgs.map((img) => {
    return {
      original: img,
    };
  });
  const settings = {
    showBullets: true,
    onErrorImageURL: process.env.PUBLIC_URL + "/notfound.jpeg",
    showPlayButton: false,
    showFullscreenButton: false,
  };

  return (
    <Box id="gallery wrapper" w="100%" onDoubleClick={onDoubleClick}>
      <ImageGallery items={imagesObj} {...settings} />
    </Box>
  );
}
