/* import TrendingMovie from "../../../components/moviesBanner"; */

/* import background from "../../../assets/img/exampleBackground.png"; */
import Carousel from "../../../components/carousel/headerBanner";
import { HeaderContainer } from "./style";

/* const movie = {
  name: "Insider",
  launch: 2022,
  gender: "Comedy horror",
  seasons: 1,
}; */

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Carousel />
    </HeaderContainer>
  );
};

export default Header;

/*         <TrendingMovie movie={movie} /> */
