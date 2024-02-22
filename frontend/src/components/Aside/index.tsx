import {
  Container,
  ToggleMenu,
  Menu,
  Cover,
  Logo,
  LogoImg,
  LogoText,
  Options,
  MenuOption,
  Icon,
} from "./style";
import Xbutton from "./Xbutton";

import filmIcon from "../../assets/icons/film.svg";
import heartIcon from "../../assets/icons/heart.svg";
import trendingIcon from "../../assets/icons/trending.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import communityIcon from "../../assets/icons/users.svg";
import socialIcon from "../../assets/icons/message.svg";
import optionsIcon from "../../assets/icons/options.svg";
import logoutIcon from "../../assets/icons/log-out.svg";

const addScrollbar = () => {
  document.body.classList.remove("removeScroll");
};

const Aside = (): React.JSX.Element => {
  return (
    <>
      <ToggleMenu type="checkbox" id="navbarMenu" />
      <Container className="navbarMenu">
        <div>
          <Logo>
            <LogoImg src="/Logo.svg" alt="" />
            <LogoText>WATCH</LogoText>
            <label htmlFor="navbarMenu" onClick={() => addScrollbar()}>
              <Xbutton />
            </label>
          </Logo>
          <Menu>
            <Options>
              <Icon src={filmIcon} className="current" />
              <MenuOption href="" className="current">
                Home
              </MenuOption>
            </Options>
            <Options>
              <Icon src={heartIcon} alt="" />
              <MenuOption href="">Favorites</MenuOption>
            </Options>
            <Options>
              <Icon src={trendingIcon} alt="" />
              <MenuOption href="">Trending</MenuOption>
            </Options>
            <Options>
              <Icon src={calendarIcon} alt="" />
              <MenuOption href="">Coming soon</MenuOption>
            </Options>
          </Menu>
        </div>
        <Menu>
          <Options>
            <Icon src={communityIcon} alt="" />
            <MenuOption href="">Community</MenuOption>
          </Options>
          <Options>
            <Icon src={socialIcon} alt="" />
            <MenuOption href="">Social</MenuOption>
          </Options>
        </Menu>
        <Menu>
          <Options>
            <Icon src={optionsIcon} alt="" />
            <MenuOption href="">Settings</MenuOption>
          </Options>
          <Options>
            <Icon src={logoutIcon} alt="" />
            <MenuOption href="">Logout</MenuOption>
          </Options>
        </Menu>
      </Container>
      <Cover />
    </>
  );
};

export default Aside;
