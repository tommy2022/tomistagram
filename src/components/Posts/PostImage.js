import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./ImageArrow.css";


export default function PostImage({imgs, onDoubleClick}) {
    const imagesObj = imgs.map((img) => {
        return {
            original: img
        }
    })
    const settings = {
        showBullets: true,
        onErrorImageURL: process.env.PUBLIC_URL + "/notfound.jpeg",
        showPlayButton: false,
        showFullscreenButton: false,
    }
    console.log(imagesObj)
    return (
        <ImageGallery items={imagesObj} {...settings}/>
    )
}