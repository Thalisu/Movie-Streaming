import { Container, ToggleMenu } from "./style";

const Aside = () => {
  return (
    <>
      <ToggleMenu type="checkbox" id="navbarMenu" />
      <Container className="navbarMenu"></Container>
    </>
  );
};

export default Aside;
