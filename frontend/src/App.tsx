import Header from "./pages/home/header";
import Main from "./pages/home/main";
import Navbar from "./components/navbar";
import Aside from "./components/Aside";
import Footer from "./pages/home/footer";

const App = () => {
  return (
    <>
      <Aside />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
