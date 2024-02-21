import { RouterType } from "../types";
import Home from "./Home";
import NotFound from "./PlaceHolders/NotFound";
import PlayerPlaceHolder from "./PlaceHolders/PlayerPlaceholder";

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
  {
    path: "*",
    element: <NotFound />,
    title: "NoRoutesFound",
  },
];

export default pagesData;
