import {
  NavContainer,
  MenuList,
  ProfileList,
  ToggleMenu,
  Icons,
  Anchor,
} from "./style";

import searchIcon from "../../../assets/icons/search.svg";
import bellIcon from "../../../assets/icons/bell.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <MenuList>
        <li>
          <label htmlFor="navbarMenu">
            <ToggleMenu />
          </label>
        </li>
        <li>
          <Anchor href="">Movies</Anchor>
        </li>
        <li>
          <Anchor href="">Series</Anchor>
        </li>
        <li>
          <Anchor href="">Documentaries</Anchor>
        </li>
      </MenuList>
      <ProfileList>
        <li>
          <Icons src={searchIcon} alt="search" />
        </li>
        <li>
          <Icons src={bellIcon} alt="notifications" />
        </li>
        <li>
          <div>
            <img src="" alt="" />
            <span>Thalisu</span>
          </div>
        </li>
      </ProfileList>
    </NavContainer>
  );
};

export default Navbar;
