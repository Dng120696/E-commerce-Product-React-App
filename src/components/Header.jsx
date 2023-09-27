import { useState } from "react";

export function Header({ onSetCart, itemCount }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className="header__container">
      <div className={`overlay  ${isShow ? "show__overlay" : ""}`}></div>
      <nav>
        <div className="nav__left-bar">
          <div className="menu" onClick={() => setIsShow((show) => !show)}>
            <img src="./images/icon-menu.svg" alt="menu" />
          </div>
          <img src="./images/logo.svg" alt="logo" className="nav__logo" />
          <aside className={isShow ? "show__aside" : ""}>
            <img
              src="./images/icon-close.svg"
              alt="icon"
              className="nav__close"
              onClick={() => setIsShow((show) => !show)}
            />
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="nav__right-bar">
          <div className="btn__cart">
            <small className="item__count">{itemCount || ""}</small>
            <img
              src="./images/icon-cart.svg"
              alt="cart"
              className="nav__cart"
              onClick={() => onSetCart((isShowCart) => !isShowCart)}
            />
          </div>

          <img
            src="./images/image-avatar.png"
            alt="avatar"
            className="nav__avatar"
          />
        </div>
      </nav>
    </header>
  );
}
