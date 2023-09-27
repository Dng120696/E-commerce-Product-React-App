export function ProductInfo() {
  return (
    <>
      <p className="company__name"> Sneaker Company</p>
      <h1 className="product__name">Fall Limited Edition Sneakers</h1>
      <p className="product__info">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product__amount">
        <p>
          <span className="product__price"> $125.00</span>
          <span className="product__discount">50%</span>
        </p>
        <span className="product__original-price"> $250.00 </span>
      </div>
    </>
  );
}
