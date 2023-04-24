import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  console.log(galleryItems);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/gallery")
      .then((response) => {
        setGalleryItems(response.data.gallery);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
};

export default Gallery;
