import { NavContainer, MenuList, ProfileList } from "./style";

import searchIcon from "../../../../assets/icons/search.svg";
import bellIcon from "../../../../assets/icons/bell.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <MenuList>
        <li>
          <a href="">Movies</a>
        </li>
        <li>
          <a href="">Series</a>
        </li>
        <li>
          <a href="">Documentaries</a>
        </li>
      </MenuList>
      <ProfileList>
        <li>
          <a href="">
            <img src={searchIcon} alt="search" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={bellIcon} alt="notifications" />
          </a>
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
