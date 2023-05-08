import { FETCH_RES_URL } from "../config";
import RestrauantCard from "./RestrauantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RES_URL);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  }

  //check online/offline
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 You are offline please check your internet connection</h1>;
  }

  if (!allRestaurants)
    //not rendering component (early return)
    return null;

  console.log("render");
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : filteredRestaurants.length === 0 ? (
    <h1>Item Not Found.</h1>
  ) : (
    <>
      <div className="bg-blue-200 p-5 my-2 space-x-2">
        <input
          className="bg-blue-50 focus:bg-yellow-100"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="px-5 bg-blue-950 hover:bg-slate-500 text-white rounded-md p-1 m-1"
          onClick={() => {
            //need to filter data
            const data = filterData(searchText, allRestaurants);

            //update the state
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="flex flex-wrap m-2">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restrauant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
