import Title from "./Title";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isloggedin, setIsloggedin] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
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
        </ul>
      </div>
      {isloggedin ? (
        <button onClick={() => setIsloggedin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsloggedin(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
