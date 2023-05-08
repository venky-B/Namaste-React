import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "venky",
    email: "venkymon@gmail.com",
  },
});

export default UserContext;
