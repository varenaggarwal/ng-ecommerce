import { useCart } from "../hooks/useCart";
import { useLang } from "../hooks/useLang";

const products = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "jalebi",
    price: 50
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000
  }
];

export default function ProductListing() {
  const { setItemsInCart } = useCart();
  const { lang, langData } = useLang();
  return (
    <>
      <h1>Products Listing: </h1>
      {products.map((item) => (
        <div
          key={item.id}
          style={{ border: "solid 1px black", padding: "1rem", margin: "1rem" }}
        >
          <h2>Product {item.name}</h2>
          <p>Price: {item.price}</p>

          <button
            onClick={() =>
              setItemsInCart((items) => {
                return [...items, item];
              })
            }
          >
            {langData[lang].addToCart}
          </button>
        </div>
      ))}
    </>
  );
}
