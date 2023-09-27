import { imgDataProduct, imgDataProductThumbnails } from "../imgData";

export function ImageSlider({
  onNext,
  onPrevious,
  currSlide,
  isClose,
  onClose,
  onSetCurrSlide,
}) {
  return (
    <div className={`image__slider ${isClose ? "md:block" : "md:hidden"}`}>
      <i
        className="fa-solid fa-xmark btn__close-slider"
        onClick={() => onClose((close) => !close)}
      ></i>
      <div className="arrow__buttons">
        <button className="btn btn__previous" onClick={onPrevious}>
          <img src="./images/icon-previous.svg" alt="previous" />
        </button>
        <button className="btn btn__next" onClick={onNext}>
          <img src="./images/icon-next.svg" alt="next" />
        </button>
      </div>
      <div className="image__product-slides">
        {imgDataProduct.map((img, i) => (
          <img
            key={i}
            src={img.product}
            alt="product"
            className={` product product-${i + 1} `}
            style={{
              transform: `translateX(${100 * (i - currSlide)}%)`,
            }}
          />
        ))}
      </div>
      <div className="image__product-thumbnails-slides">
        {imgDataProductThumbnails.map((img, i) => (
          <img
            key={i}
            src={img.product}
            alt="product"
            className={` product-thumb product-thumb-${i + 1} ${
              i === currSlide ? "active__img" : ""
            } `}
            onClick={() => onSetCurrSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
