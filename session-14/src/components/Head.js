import React from "react";
import HB_BUTTON from "../assets/HB_button.png";
import YT_LOGO from "../assets/youtube-logo-png-transparent-image-5.png";
import USER_ICON from "../assets/user-icon.png";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid  grid-flow-col p-2 my-2 shadow-lg">
      <div className="flex items-center col-span-1 gap-5">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-5 al-4 cursor-pointer"
          src={HB_BUTTON}
          alt="options"
        />
        <img className="h-16 cursor-pointer" src={YT_LOGO} alt="yt-logo" />
      </div>
      <div className="flex items-center col-span-10">
        <input
          className="w-1/2 rounded-l-full border border-gray-400 p-2"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full p-3 bg-gray-100">
          <BsSearch />
        </button>
      </div>
      <div className="flex items-center col-span-1">
        <img className="h-12" src={USER_ICON} alt="user" />
      </div>
    </div>
  );
};

export default Head;
