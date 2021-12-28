import "react-image-gallery/styles/css/image-gallery.css";
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
  },
];

export default class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}