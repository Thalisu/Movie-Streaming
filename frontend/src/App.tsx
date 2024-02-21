import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import Player from "./pages/Player";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Player />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
