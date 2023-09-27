import { imgDataProduct } from "../imgData";

export function FormSection({
  onsetItems,
  onSetQuantity,
  quantity,
  amount,
  currSlide,
}) {
  function handleSubmitItem(e) {
    e.preventDefault();
    if (quantity === 0) return;

    onsetItems((item) => [
      ...item,
      {
        text: "Fall Limited Edition Sneakers",
        quantity,
        amount,
        id: crypto.randomUUID(),
        img: imgDataProduct[currSlide],
      },
    ]);
  }

  function handleIncrement() {
    onSetQuantity((quantity) => quantity + 1);
  }
  function handleDecrement() {
    if (quantity <= 0) return 0;
    onSetQuantity((quantity) => quantity - 1);
  }
  return (
    <div className="form__section">
      <div className="product__setting-quantity">
        <button className="product__decrement" onClick={handleDecrement}>
          -
        </button>
        <button className="product__quantity">{quantity}</button>
        <button className="product__increment" onClick={handleIncrement}>
          +
        </button>
      </div>
      <form id="form__container" onSubmit={handleSubmitItem}>
        <button className="btn__submit-product">Add to cart</button>
      </form>
    </div>
  );
}
