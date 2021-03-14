import { useCart } from "../hooks/useCart";

export default function CartHeader() {
  const { itemsInCart } = useCart();
  return <h3> Items in cart {itemsInCart.length} </h3>;
}
