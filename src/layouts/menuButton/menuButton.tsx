import { Container, Row } from "./style";
const MenuButton = () => {
  const removeScrollbar = () => {
    document.body.classList.add("removeScroll");
  };
  return (
    <>
      <Container onClick={() => removeScrollbar()}>
        <Row />
        <Row />
        <Row />
      </Container>
    </>
  );
};
export default MenuButton;
