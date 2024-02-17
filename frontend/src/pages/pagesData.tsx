import { routerType } from "../types";
import Home from "./Home";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
];

export default pagesData;
