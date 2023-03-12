import { restaurantList } from "../config";
import RestrauantCard from "./RestrauantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
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
            const data = filterData(searchText, restaurants);

            //update the state
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
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
