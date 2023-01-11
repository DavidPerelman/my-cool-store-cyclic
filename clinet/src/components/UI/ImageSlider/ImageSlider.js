import React, { useEffect, useState } from 'react';

const ImageSlider = ({ images }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log(images.length);

      for (let i = 0; i < images.length; i++) {
        setSlides((slides) => [
          ...slides,
          { url: images[i], title: `images-${[i]}` },
        ]);
      }
      console.log(slides);
    }, 5000);
  }, []);

  return <div>ImageSlider</div>;
};

export default ImageSlider;
