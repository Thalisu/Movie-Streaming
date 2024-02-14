import Header from "./components/moviesBanner";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Aside from "./layouts/Aside";

const app = () => {
  return (
    <>
      <Aside />
      <Navbar />
      <Header />
      <Main />
    </>
  );
};

export default app;
