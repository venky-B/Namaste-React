import { useSelector, useDispatch } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";
import emptycart from "../assets/img/empty-cart.png";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="flex space-x-4 ">
        <h1 className="font-bold"> Cart Items - {cartItems.length} </h1>
        <button className="bg-red-200" onClick={() => handleClearcart()}>
          Clear Cart
        </button>
      </div>

      {cartItems.length == 0 ? (
        <div>
          <h1 className="text-2xl">cart is empty</h1>
          <img alt="empty cart" src={emptycart} />{" "}
        </div>
      ) : (
        <div className="flex flex-wrap">
          {cartItems.map((item) => (
            <FoodItemCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
