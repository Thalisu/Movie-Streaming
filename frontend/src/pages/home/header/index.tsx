/* import TrendingMovie from "../../../components/moviesBanner"; */

/* import background from "../../../assets/img/exampleBackground.png"; */
import Carousel16_9 from "../../../components/carousel/banner_16_9";
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
      <Carousel16_9 />
    </HeaderContainer>
  );
};

export default Header;

/*         <TrendingMovie movie={movie} /> */