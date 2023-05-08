import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauantMenu = () => {
  //how to read dynamic url params
  const params = useParams();
  const { id } = params;
  // console.log(params);

  const [restrauant, resMenu] = useRestaurant(id); // user-defined hook to fetch api

  if (!restrauant) return <Shimmer />;

  return (
    <div className="flex space-x-10 m-5">
      <div>
        <h1 className="font-bold">{restrauant.name}</h1>
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
        <h1 className="font-bold">Menu</h1>
        <ul>
          {resMenu.map((i) => (
            <li key={i?.card?.info?.id}>{i?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauantMenu;
