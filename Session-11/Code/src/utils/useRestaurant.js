import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
  const [restrauant, setRestrauant] = useState({});
  const [resMenu, setResMenu] = useState([]);

  //call API

  useEffect(() => {
    getRestrauantInfo();
  }, []);

  async function getRestrauantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
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
  return [restrauant, resMenu];
};

export default useRestaurant;
