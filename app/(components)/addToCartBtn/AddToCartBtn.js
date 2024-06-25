import "./AddToCartBtn.css";
import { FaCartShopping } from "react-icons/fa6";

export default function AddToCartBtn({ addToCart, item }) {
  return (
    <>
      <button onClick={() => addToCart(item)} className="CartButton">
        <span className="CartIconContainer">
          <FaCartShopping className="cartIcon text-black" />
        </span>
        <p className="btnText">Add to Cart</p>
      </button>
    </>
  );
}
