import { createContext, useState } from "react";

export const LangContext = createContext();

const langData = {
  hi: {
    product: "उत्पाद",
    cart: "झोला",
    addToCart: "कार्ट में जोड़ें",
    checkout: "पैसे भरे",
    eCommerce: "व्यापार"
  },
  en: {
    product: "Product",
    cart: "Cart",
    addToCart: "Add to Cart",
    checkout: "Checkout",
    eCommerce: "eCommerce"
  }
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LangContext.Provider value={{ lang, setLang, langData }}>
      {children}
    </LangContext.Provider>
  );
}
