import { useState } from "react";
import { Container, Row1, Row2, Row3 } from "./style";
const MenuButton = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Container onClick={() => setToggle((toggle) => !toggle)}>
        <Row1 $toggle={toggle} />
        <Row2 $toggle={toggle} />
        <Row3 $toggle={toggle} />
      </Container>
    </>
  );
};
export default MenuButton;
