import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

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
