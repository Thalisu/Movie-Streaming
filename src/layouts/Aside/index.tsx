import { Container, ToggleMenu, Menu, Cover } from "./style";
import Xbutton from "./Xbutton";

const Aside = () => {
  return (
    <>
      <ToggleMenu type="checkbox" id="navbarMenu" />
      <Container className="navbarMenu">
        <Menu>
          <label htmlFor="navbarMenu">
            <Xbutton />
          </label>
        </Menu>
      </Container>
      <Cover />
    </>
  );
};

export default Aside;
