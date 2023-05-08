import { useRouteError } from "react-router-dom";

const Error = () => {
  const e = useRouteError();
  console.log(e);
  return (
    <>
      <h1>Oops Something went wrong!!</h1>
      <h2>{e.status + " : " + e.statusText}</h2>
    </>
  );
};

export default Error;
