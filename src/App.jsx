import "./styles.css";
import { useState } from "react";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import CartHeader from "./components/CartHeader";
import Checkout from "./components/Checkout";
import { useLang } from "./hooks/useLang";

export default function App() {
  const [route, setRoute] = useState("productListing");
  const { lang, setLang, langData } = useLang();

  return (
    <div className="App">
      <button onClick={() => setLang(() => (lang === "en" ? "hi" : "en"))}>
        {lang === "en" ? "हिंदी में देखें" : "Change to English"}
      </button>
      <h1 className="app-header">{langData[lang].eCommerce}</h1>
      <div className="app-body">
        <button onClick={() => setRoute(() => "productListing")}>
          {langData[lang].product}
        </button>
        <button onClick={() => setRoute(() => "cart")}>
          {langData[lang].cart}
        </button>
        <button onClick={() => setRoute(() => "checkout")}>
          {langData[lang].checkout}
        </button>
        <CartHeader />
        {route === "cart" && <Cart />}
        {route === "productListing" && <ProductListing />}
        {route === "checkout" && <Checkout />}
      </div>
    </div>
  );
}
