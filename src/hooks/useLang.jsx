import { useContext } from "react";
import { LangContext } from "../contexts/lang-context";

export function useLang() {
  return useContext(LangContext);
}
