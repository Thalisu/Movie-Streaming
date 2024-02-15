import { HeaderContainer } from "./style";
import TrendingMovie from "./movieDetails";

import background from "../../assets/img/exampleBackground.png";

const movie = {
  name: "Insider",
  launch: 2022,
  gender: "Comedy horror",
  seasons: 1,
};

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer $background={background}>
        <TrendingMovie movie={movie} />
      </HeaderContainer>
    </>
  );
};

export default Header;
