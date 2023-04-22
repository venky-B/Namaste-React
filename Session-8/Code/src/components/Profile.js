import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hi");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);
  return (
    <>
      <h2>Hello this from profile - Funtional component </h2>
      <h3> name : {props.name} </h3>
      <h3>count : {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        count
      </button>
    </>
  );
};

export default Profile;
