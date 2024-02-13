import {
  VisibleArea,
  CarouselContainer,
  Card,
  CarouselController,
  Button,
} from "./style";

import arrow from "../../../assets/icons/arrow.svg";
import useSlider from "../../../hooks/useSlider";

const Carousel = () => {
  const slider = useSlider();

  return (
    <VisibleArea
      onMouseDown={(event) => slider.dragStart(event)}
      onMouseUp={slider.dragStop}
      onMouseMove={(event) => slider.dragging(event)}
    >
      <CarouselController onClick={() => slider.buttonHandler("left")}>
        <Button src={arrow} />
      </CarouselController>
      <CarouselContainer
        ref={slider.carouselRef}
        $isDragging={slider.scrollData.isDragging}
      >
        <Card $first={true} draggable="false" ref={slider.cardRef}>
          0
        </Card>
        <Card draggable="false">1</Card>
        <Card draggable="false">2</Card>
        <Card draggable="false">3</Card>
        <Card draggable="false">4</Card>
        <Card draggable="false">5</Card>
        <Card draggable="false">6</Card>
        <Card draggable="false">7</Card>
        <Card draggable="false">8</Card>
        <Card draggable="false">9</Card>
        <Card draggable="false">10</Card>
        <Card draggable="false">11</Card>
        <Card draggable="false">12</Card>
        <Card draggable="false">13</Card>
        <Card draggable="false">14</Card>
      </CarouselContainer>
      <CarouselController
        $right={true}
        onClick={() => slider.buttonHandler("right")}
      >
        <Button src={arrow} $right={true} />
      </CarouselController>
    </VisibleArea>
  );
};

export default Carousel;
