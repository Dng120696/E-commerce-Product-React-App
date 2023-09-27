import { useState } from "react";
import { imgDataProduct } from "../imgData";
import { SliderOverlay } from "./SliderOverlay";
import { ImageProductLeftSlider } from "./ImageProductLeftSlider";
import { ImageSlider } from "./ImageSlider";

export function MainLeftContainer({ onSetCurrSlide, currSlide }) {
  const [isClose, setIsClose] = useState(false);
  const maxSlide = imgDataProduct.length - 1;

  function handlePrevious() {
    currSlide === 0
      ? onSetCurrSlide(maxSlide)
      : onSetCurrSlide((curr) => curr - 1);
  }
  function handleNext() {
    currSlide === maxSlide
      ? onSetCurrSlide(0)
      : onSetCurrSlide((curr) => curr + 1);
  }

  function handleOpenSlide(curr) {
    onSetCurrSlide(curr);
    setIsClose((close) => !close);
  }
  return (
    <section className="main__left-container">
      <SliderOverlay isClose={isClose} />
      <ImageProductLeftSlider
        currSlide={currSlide}
        onOpenSlide={handleOpenSlide}
        onSetCurrSlide={onSetCurrSlide}
      />
      <ImageSlider
        onPrevious={handlePrevious}
        onNext={handleNext}
        currSlide={currSlide}
        isClose={isClose}
        onClose={setIsClose}
        onSetCurrSlide={onSetCurrSlide}
      />
    </section>
  );
}
