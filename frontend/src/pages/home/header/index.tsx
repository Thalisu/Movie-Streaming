import Carousel from "../../../components/carousel/headerBanner";
import Navbar from "../../../components/navbar";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <Carousel />
      </HeaderContainer>
    </>
  );
};

export default Header;
