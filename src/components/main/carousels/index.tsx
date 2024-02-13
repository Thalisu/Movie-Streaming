import {
  VisibleArea,
  CarouselContainer,
  Card,
  CarouselController,
  Button,
} from "./style";

import arrow from "../../../assets/icons/arrow.svg";
import { useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);
  const scrollData = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeftPos: 0,
  });

  const dragStart = (e: React.MouseEvent) => {
    if (carouselRef.current === null) return;
    const carousel: HTMLElement = carouselRef.current;

    scrollData.current.isDragging = true;
    scrollData.current.startX = e.pageX;
    scrollData.current.startScrollLeftPos = carousel.scrollLeft;
  };
  const dragStop = () => (scrollData.current.isDragging = false);

  const dragging = (e: React.MouseEvent) => {
    if (!scrollData.current.isDragging) return;
    if (carouselRef.current === null) return;
    const carousel: HTMLElement = carouselRef.current;
    const startX = scrollData.current.startX;
    const startScrollLeftPos = scrollData.current.startScrollLeftPos;

    carousel.scrollLeft = startScrollLeftPos - (e.pageX - startX);
  };

  return (
    <VisibleArea>
      <CarouselController>
        <Button src={arrow} />
      </CarouselController>
      <CarouselContainer
        onMouseMove={(event) => dragging(event)}
        onMouseDown={(event) => dragStart(event)}
        onMouseUp={dragStop}
        ref={carouselRef}
      >
        <Card $first={true} draggable="false"></Card>
        <Card draggable="false"></Card>
        <Card draggable="false"></Card>
        <Card draggable="false"></Card>
        <Card draggable="false"></Card>
        <Card draggable="false"></Card>
        <Card draggable="false"></Card>
        <Card draggable="false"></Card>
        <Card draggable="false"></Card>
      </CarouselContainer>
      <CarouselController $right={true}>
        <Button src={arrow} $right={true} />
      </CarouselController>
    </VisibleArea>
  );
};

export default Carousel;
