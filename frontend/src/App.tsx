import Header from "./components/moviesBanner";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Aside from "./components/Aside";

const App = () => {
  return (
    <>
      <Aside />
      <Navbar />
      <Header />
      <Main />
    </>
  );
};

export default App;
