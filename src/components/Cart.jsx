import { useCart } from "../hooks/useCart";

function ShowItems({ item }) {
  return (
    <div
      key={item.id}
      style={{ border: "solid 1px black", padding: "1rem", margin: "1rem" }}
    >
      <h2>Product {item.name}</h2>
      <p>Price: {item.price}</p>
    </div>
  );
}

export default function Cart() {
  const { itemsInCart } = useCart();
  return (
    <>
      <h1> Cart </h1>
      {itemsInCart.map((item) => (
        <ShowItems item={item} />
      ))}
    </>
  );
}
