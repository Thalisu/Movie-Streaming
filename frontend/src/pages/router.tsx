import { Route, Routes, useLocation } from "react-router-dom";
import { RouterType } from "../types";
import pagesData from "./pagesData";
import { useEffect } from "react";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
