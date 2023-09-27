export function CartBox({ isCartBoxShow, items, onsetItems }) {
  function handleDelete(id) {
    onsetItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <section className={`cart__box ${isCartBoxShow ? "show__cart" : ""}`}>
      <h3 className="cart__title">Cart</h3>
      <div className="item__box">
        {items.length === 0 ? (
          <p className="empty__message">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="item">
              <div className="product__purchase">
                <img
                  src={item.img.product}
                  alt="thumbnails"
                  className="img__product"
                />
                <p className="product__purchase-info">
                  <span>{item.text}</span>
                  <span>
                    $125.00 x {item.quantity}{" "}
                    <b>${(125 * item.quantity).toFixed(2)}</b>
                  </span>
                </p>
                <img
                  src="./images/icon-delete.svg"
                  alt="delete"
                  className="img__delete"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
              <button className="btn__checkout">Checkout</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
