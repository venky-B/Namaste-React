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
      <div className="search-container">
        <input
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
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
      <div className="restaurant-list">
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
