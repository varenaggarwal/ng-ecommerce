import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./contexts/cart-context";
import { LangProvider } from "./contexts/lang-context";
import { ThemeProvider } from "./contexts/theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
