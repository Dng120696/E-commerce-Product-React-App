export function SliderOverlay({ isClose }) {
  return (
    <div
      className={`slider__overlay ${!isClose ? "md:hidden" : "md:block"}`}
    ></div>
  );
}
