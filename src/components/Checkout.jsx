import { useEffect, useRef } from "react";

export default function Checkout() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const payHandler = () => {
    const inputValue = inputRef.current.value;
    console.log({ inputValue });
  };

  return (
    <>
      <lable>Enter Credit Card Number:</lable>
      <input ref={inputRef} type="number"></input>
      <button onClick={payHandler}>Pay</button>
    </>
  );
}
