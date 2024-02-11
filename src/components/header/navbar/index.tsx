import { NavContainer, MenuList, ProfileList, ToggleMenu } from "./style";

import searchIcon from "../../../assets/icons/search.svg";
import bellIcon from "../../../assets/icons/bell.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <MenuList>
        <li>
          <label htmlFor="navbarMenu">
            <ToggleMenu src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAASElEQVR42mNgGAWjYFCB//n/55MJ47EbSD54j93Ahv/3yYQFo/E7CkZzymhOGQW0yBCM1M8pCdTOKe+olVPuQeFoThkFwx0AAKIX6gZTeyisAAAAAElFTkSuQmCC" />
          </label>
        </li>
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
          <img src={searchIcon} alt="search" />
        </li>
        <li>
          <img src={bellIcon} alt="notifications" />
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
