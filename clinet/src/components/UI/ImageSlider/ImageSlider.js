import React, { useEffect, useState } from 'react';
import classes from './ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${images[currentIndex]})`,
  };

  useEffect(() => {
    changeDotColor(0);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    changeDotColor(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    changeDotColor(newIndex);
  };

  const goToSlide = (e, slideIndex) => {
    setCurrentIndex(slideIndex);
    changeDotColor(slideIndex);
  };

  const changeDotColor = (index) => {
    const dots = document.getElementsByClassName('dot');

    for (let i = 0; i < dots.length; i++) {
      if (Number(dots[i].id) === index) {
        dots[i].style.color = 'red';
      } else {
        dots[i].style.color = 'black';
      }
    }
  };

  return (
    <div className={classes.sliderStyles}>
      <div
        className={`${classes.arrow} ${classes.arrowLeft}`}
        onClick={goToPrevious}
      >
        ❰
      </div>
      <div
        className={`${classes.arrow} ${classes.arrowRight}`}
        onClick={goToNext}
      >
        ❱
      </div>
      <div style={slideStyles} className={classes.slideStyles}></div>
      <div className={classes.dotsContainerStyles}>
        {images.map((image, i) => {
          return (
            <div
              key={i}
              id={i}
              className={`${classes.dotStyles} dot`}
              onClick={(e) => goToSlide(e, i)}
            >
              ●
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
