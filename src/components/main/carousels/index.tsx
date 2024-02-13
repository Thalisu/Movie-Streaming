import {
  VisibleArea,
  CarouselContainer,
  Card,
  CarouselController,
  Button,
} from "./style";

import arrow from "../../../assets/icons/arrow.svg";

const Carousel = () => {
  return (
    <VisibleArea>
      <CarouselController>
        <Button src={arrow} />
      </CarouselController>
      <CarouselContainer>
        <Card $first={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CarouselContainer>
      <CarouselController $right={true}>
        <Button src={arrow} $right={true} />
      </CarouselController>
    </VisibleArea>
  );
};

export default Carousel;
