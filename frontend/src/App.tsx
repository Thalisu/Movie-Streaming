import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import Player from "./pages/Player";

import createYoutubeIframeAPIScript from "./createYoutubeIframeScript.ts";
createYoutubeIframeAPIScript();

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Player />
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
