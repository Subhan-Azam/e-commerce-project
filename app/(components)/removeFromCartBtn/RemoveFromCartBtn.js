import "./RemoveFromCartBtn.css";
import { FaCartShopping } from "react-icons/fa6";

export default function RemoveFromCartBtn({ removeFromCart, item }) {
  return (
    <>
      <button onClick={() => removeFromCart(item)} className="CartBtn">
        <span className="IconContainer">
          <FaCartShopping className="cart text-white" />
        </span>
        <p className="text">Remove From Cart</p>
      </button>
    </>
  );
}
