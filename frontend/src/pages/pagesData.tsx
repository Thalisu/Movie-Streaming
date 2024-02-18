import { routerType } from "../types";
import Home from "./Home";
import Player from "./Player";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "player",
    element: <Player />,
    title: "player",
  },
];

export default pagesData;
