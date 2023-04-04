import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestrauantMenu = () => {
  //how to read dynamic url params
  const params = useParams();
  const { id } = params;
  // console.log(params);

  const [restrauant, setRestrauant] = useState({});
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    getRestrauantInfo();
  }, []);

  async function getRestrauantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9165167&lng=79.13249859999999&restaurantId=" +
        id
    );
    const json = await data.json();
    // console.log(json);
    setRestrauant(json?.data?.cards[0]?.card?.card?.info);
    setResMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  if (!restrauant) return <Shimmer />;

  return (
    <div className="menu">
      <div>
        <h1>{restrauant.name}</h1>
        <img
          src={IMG_CDN_URL + restrauant.cloudinaryImageId}
          alt="Food Image"
        />
        <h3> Restrauant id : {id}</h3>
        <h3>{restrauant.locality}</h3>
        <h3>{restrauant.areaName}</h3>
        <h3>{restrauant.city}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {resMenu.map((i) => (
            <li key={i.card.info.id}>{i.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauantMenu;
