/*
APP LAYOUT
    - Header
      - Logo
      - Nav Items
      - Cart 
    - Body
      - Search bar
      - RestrauntList
        - Restrauntcard (many cards)
          - Image
          - Name
          - Rating
          - Cusines
    - Footer
      - Links
      - Copyrights
 */

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauantMenu from "./components/RestrauantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "raju",
    email: "raju@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "Profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "venky",
              email: "venkymon@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "restrauant/:id",
        element: <RestrauantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
