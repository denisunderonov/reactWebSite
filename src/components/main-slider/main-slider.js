import "./main-slider.css";
import React, { useState, useEffect } from "react";
import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

export default function MainSliderSection() {
  const [pos, setPos] = useState(85);

  function nextImage() {
    setPos((prevPos) => prevPos + 90);
  }
  function previousImage() {
    setPos((prevPos) => prevPos - 90);
  }

  useEffect(() => {
    const slider = document.querySelector(".main-slider");
    slider.style.right = `${pos}%`;
  }, [pos]);

  return (
    <section className="main-slider-section">
      <button onClick={nextImage} className="main-slider__right-button">
        +
      </button>
      <button onClick={previousImage} className="main-slider__left-button">
        -
      </button>
      <MainSlider
        content={
          <>
            <MainSliderItem image={image0} />
            <MainSliderItem image={image1} />
            <MainSliderItem image={image2} />
            <MainSliderItem image={image1} />
            <MainSliderItem image={image0} />
            <MainSliderItem image={image2} />
            <MainSliderItem image={image1} />
          </>
        }
      />
    </section>
  );
}

function MainSliderItem({ image }) {
  return <img src={image} className={`main-slider__image`} />;
}

function MainSlider({ content }) {
  return <div className="main-slider">{content}</div>;
}
