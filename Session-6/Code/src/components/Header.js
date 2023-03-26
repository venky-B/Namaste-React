import Title from "./Title";
import { useState } from "react";

const Header = () => {
  const [isloggedin, setIsloggedin] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
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
