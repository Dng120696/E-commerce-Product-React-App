import { useState } from "react";
import { Header } from "./components/Header";
import { MainLeftContainer } from "./components/MainLeftContainer";
import { ProductInfo } from "./components/ProductInfo";
import { CartBox } from "./components/CartBox";
import { Main } from "./components/MainContainer";
import { MainRightContainer } from "./components/MainRightContainer";
import { FormSection } from "./components/FormSection";

export default function App() {
  const [isCartBoxShow, setIsCartBoxShow] = useState(false);
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);
  const itemCount = items.length;
  const amount = 125;

  return (
    <>
      <Header onSetCart={setIsCartBoxShow} itemCount={itemCount} />
      <Main>
        <CartBox
          isCartBoxShow={isCartBoxShow}
          items={items}
          currSlide={currSlide}
          onsetItems={setItems}
        />
        <MainLeftContainer
          currSlide={currSlide}
          onSetCurrSlide={setCurrSlide}
        />
        <MainRightContainer>
          <ProductInfo />
          <FormSection
            onsetItems={setItems}
            onSetQuantity={setQuantity}
            quantity={quantity}
            amount={amount}
            currSlide={currSlide}
          />
        </MainRightContainer>
      </Main>
    </>
  );
}
