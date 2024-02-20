import { RouterType } from "../types";
import Home from "./Home";
import Player from "./Player";

const pagesData: RouterType[] = [
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
