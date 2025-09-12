import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import React from "react";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {
  const pageRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={pageRoute} />
    </>
  );
};

export default App;
