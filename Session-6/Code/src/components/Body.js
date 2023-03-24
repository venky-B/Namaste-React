import { restaurantList } from "../config";
import RestrauantCard from "./RestrauantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165167&lng=79.13249859999999&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  }

  //not rendering component (early return)
  if (!allRestaurants) return null;

  if (filteredRestaurants.length === 0) return <h1>Item Not Found.</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
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
            <RestrauantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        ;
      </div>
    </>
  );
};

export default Body;
