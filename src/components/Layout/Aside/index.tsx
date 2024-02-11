import { useState } from "react";
import { Container, SideBarButton, ToggleMenu } from "./style";

import arrow from "../../../assets/icons/arrow.svg";

const Aside = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container $toggle={toggle}>
      <SideBarButton onClick={() => setToggle((toggle) => !toggle)}>
        <ToggleMenu src={arrow} $toggle={toggle} />
      </SideBarButton>
    </Container>
  );
};

export default Aside;
