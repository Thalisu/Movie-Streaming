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
  const cardWidth = useRef(null);
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

  const dragStop = () => {
    scrollData.current.isDragging = false;
    if (carouselRef.current === null) return;
    const carousel: HTMLElement = carouselRef.current;
    if (cardWidth.current === null) return;
    const cardWidthOf: HTMLElement = cardWidth.current;

    const scrollLeftPos = carousel.scrollLeft;
    const prevPos = scrollData.current.startScrollLeftPos;

    carousel.scrollLeft = roundToMultiple(
      scrollLeftPos,
      cardWidthOf.offsetWidth + 20,
      prevPos
    );
  };

  const roundToMultiple = (
    scrollPos: number,
    widthToRound: number,
    prevPos: number
  ) => {
    console.log(scrollPos, prevPos, widthToRound);
    if (prevPos <= scrollPos)
      return Math.ceil(scrollPos / widthToRound) * widthToRound;
    return Math.floor(scrollPos / widthToRound) * widthToRound;
  };

  const dragging = (e: React.MouseEvent) => {
    if (!scrollData.current.isDragging) return;
    if (carouselRef.current === null) return;
    const carousel: HTMLElement = carouselRef.current;
    const startX = scrollData.current.startX;
    const startScrollLeftPos = scrollData.current.startScrollLeftPos;

    carousel.scrollLeft = startScrollLeftPos - (e.pageX - startX);
  };

  const buttonHandler = (button: string) => {
    if (carouselRef.current === null) return;
    const carousel: HTMLElement = carouselRef.current;
    if (cardWidth.current === null) return;
    const cardWidthOf: HTMLElement = cardWidth.current;

    carousel.scrollLeft +=
      button === "left"
        ? -(cardWidthOf.offsetWidth + 20) * 4
        : (cardWidthOf.offsetWidth + 20) * 4;
  };

  return (
    <VisibleArea>
      <CarouselController onClick={() => buttonHandler("left")}>
        <Button src={arrow} />
      </CarouselController>
      <CarouselContainer
        onMouseMove={(event) => dragging(event)}
        onMouseDown={(event) => dragStart(event)}
        onMouseUp={dragStop}
        ref={carouselRef}
        $isDragging={scrollData.current.isDragging}
      >
        <Card $first={true} draggable="false" ref={cardWidth}>
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
      <CarouselController $right={true} onClick={() => buttonHandler("right")}>
        <Button src={arrow} $right={true} />
      </CarouselController>
    </VisibleArea>
  );
};

export default Carousel;
