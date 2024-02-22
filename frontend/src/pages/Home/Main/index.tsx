import Carousel_2_3 from "../../../components/carousel/Card_2_3";
import Carousel_16_9 from "../../../components/carousel/Card_16_9";
import { Container, Tag } from "./style";

const Main = () => (
  <Container>
    <Tag>Trending</Tag>
    <Carousel_2_3 />
    <Tag>Coming soon</Tag>
    <Carousel_16_9 />
  </Container>
);

export default Main;
