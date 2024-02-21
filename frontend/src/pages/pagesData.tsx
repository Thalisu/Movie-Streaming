import { RouterType } from "../types";
import Home from "./Home";

const pagesData: RouterType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "player/:id",
    element: <Home />,
    title: "player",
  },
];

export default pagesData;
