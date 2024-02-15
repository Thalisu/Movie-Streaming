import { useRef } from "react";

const useScroller = () => {
  const carouselRef = useRef(null);
  const cardRef = useRef(null);
  const scrollDataRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeftPos: 0,
  });

  const getGapValue = () => {
    if (carouselRef.current === null) return 0;
    const carousel: HTMLElement = carouselRef.current;

    return Number(getComputedStyle(carousel).gap.replace(/[a-zA-Z]/g, ""));
  };
  const gapValue = getGapValue();

  const getVisibleCards = () => {
    if (cardRef.current === null) return 0;
    if (carouselRef.current === null) return 0;
    const carousel: HTMLElement = carouselRef.current;
    const card: HTMLElement = cardRef.current;
    const carouselWidth = carousel.offsetWidth;
    const cardWidth = card.offsetWidth;

    return Math.floor(carouselWidth / (cardWidth + gapValue));
  };

  const scrollData = scrollDataRef.current;

  const dragStart = (e: React.MouseEvent) => {
    if (carouselRef.current === null) return;
    const carousel: HTMLElement = carouselRef.current;

    scrollData.isDragging = true;
    scrollData.startX = e.pageX;
    scrollData.startScrollLeftPos = carousel.scrollLeft;
  };

  const dragStop = () => {
    if (carouselRef.current === null) return;
    if (cardRef.current === null) return;

    scrollData.isDragging = false;

    const carousel: HTMLElement = carouselRef.current;
    const card: HTMLElement = cardRef.current;
    const cardWidth = card.offsetWidth;

    const scrollLeftPos = carousel.scrollLeft;
    const prevPos = scrollData.startScrollLeftPos;

    carousel.scrollLeft = roundToMultiple(
      scrollLeftPos,
      cardWidth + gapValue,
      prevPos
    );
  };

  const roundToMultiple = (
    scrollPos: number,
    widthToRound: number,
    prevPos: number
  ) => {
    return prevPos <= scrollPos
      ? Math.ceil(scrollPos / widthToRound) * widthToRound
      : Math.floor(scrollPos / widthToRound) * widthToRound;
  };

  const dragging = (e: React.MouseEvent) => {
    if (!scrollData.isDragging) return;
    if (carouselRef.current === null) return;

    const carousel: HTMLElement = carouselRef.current;
    const startX = scrollData.startX;
    const startScrollLeftPos = scrollData.startScrollLeftPos;

    carousel.scrollLeft = startScrollLeftPos - (e.pageX - startX);
  };

  const buttonHandler = (button: string) => {
    if (carouselRef.current === null) return;
    if (cardRef.current === null) return;

    const carousel: HTMLElement = carouselRef.current;
    const card: HTMLElement = cardRef.current;
    const cardWidth = card.offsetWidth;

    carousel.scrollLeft +=
      button === "left"
        ? -(cardWidth + gapValue) * getVisibleCards()
        : (cardWidth + gapValue) * getVisibleCards();
  };

  return {
    dragStart,
    dragStop,
    dragging,
    buttonHandler,
    carouselRef,
    cardRef,
    scrollData,
  };
};

export default useScroller;
