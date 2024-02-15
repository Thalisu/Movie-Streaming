import Header from "./pages/home/header";
import Main from "./pages/home/main";
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
