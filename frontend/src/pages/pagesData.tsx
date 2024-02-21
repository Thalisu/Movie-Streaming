import { RouterType } from "../types";
import Home from "./Home";
import PlayerPlaceHolder from "./Player/Container";

const pagesData: RouterType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "player/:id",
    element: <PlayerPlaceHolder />,
    title: "player",
  },
];

export default pagesData;
