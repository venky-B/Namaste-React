import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor - parent");
  }

  componentDidMount() {
    //API call
    console.log("componentDidMount - parent");
  }

  render() {
    console.log("render - parent");

    return (
      <>
        <UserContext.Consumer>
          {/* {(value) => console.log({value})} */}
          {({ user }) => (
            <h1 className="font-bold">
              {user.name} - {user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <h1>Hello this is from about</h1>
        {/* <Outlet /> */}
        <ProfileClass name={"Child"} />
        {/* <ProfileClass name={"Secound Child"} /> */}
        <Profile name={"venky"} />
      </>
    );
  }
}

export default About;
