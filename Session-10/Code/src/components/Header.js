import Title from "./Title";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isloggedin, setIsloggedin] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-yellow-300  shadow-lg sm:bg-purple-300 md:bg-blue-200">
      <Title />
      <div>
        <ul className="flex py-10 space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>Cart</li>
          <li>
            <Link to="/Instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      {isloggedin ? (
        <button onClick={() => setIsloggedin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsloggedin(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
