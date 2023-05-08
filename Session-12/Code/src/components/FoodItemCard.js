import { IMG_CDN_URL } from "../config";

const FoodItemCard = ({ name, description, price, imageId }) => {
  return (
    <div className=" h-70 w-60 m-1 shadow-lg">
      <img src={IMG_CDN_URL + imageId} />
      <h2>{name}</h2>
      {/* <h2>{description}</h2> */}
      <h4>Rupees : {price / 100}</h4>
    </div>
  );
};

export default FoodItemCard;
