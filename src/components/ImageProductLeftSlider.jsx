import { imgDataProduct, imgDataProductThumbnails } from "../imgData";

export function ImageProductLeftSlider({
  onOpenSlide,
  currSlide,
  onSetCurrSlide,
}) {
  return (
    <div className="image__product-left-slider">
      <div className="image__product-left">
        {imgDataProduct.map((img, i) => (
          <img
            key={i}
            src={img.product}
            alt="product"
            className={` product-left product-left${i + 1} `}
            style={{
              transform: `translateX(${100 * (i - currSlide)}%)`,
            }}
            onClick={() => onOpenSlide(i)}
          />
        ))}
      </div>
      <div className="image__product-thumb-left-slider">
        {imgDataProductThumbnails.map((img, i) => (
          <img
            key={i}
            src={img.product}
            alt="product"
            className={` product-thumb-left product-thumb-left-${i + 1} ${
              i === currSlide ? "active__img" : ""
            }  `}
            onClick={() => onSetCurrSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
