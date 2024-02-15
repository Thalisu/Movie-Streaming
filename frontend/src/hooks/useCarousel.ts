import { useRef } from "react";

const useCarousel = () => {
  const carouselRef = useRef(null);
  const cardRef = useRef(null);
  const leftControllerRef = useRef(null);
  const rightControllerRef = useRef(null);
  const scrollDataRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeftPos: 0,
  });

  if (
    scrollDataRef.current.startScrollLeftPos < 100 &&
    leftControllerRef.current !== null
  ) {
    const controller: HTMLElement = leftControllerRef.current;
    controller.classList.add("start");
  }

  const removeLeftControllerClass = (carouselPos: number) => {
    if (carouselPos < 200 && leftControllerRef.current !== null) {
      const controller: HTMLElement = leftControllerRef.current;
      controller.classList.add("start");
    } else if (leftControllerRef.current !== null) {
      const controller: HTMLElement = leftControllerRef.current;
      controller.classList.remove("start");
    }
  };

  const removeRightControllerClass = (add: boolean) => {
    if (rightControllerRef.current !== null && add) {
      const controller: HTMLElement = rightControllerRef.current;
      controller.classList.add("end");
    } else if (rightControllerRef.current !== null && !add) {
      const controller: HTMLElement = rightControllerRef.current;
      controller.classList.remove("end");
    }
  };

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

    carousel.classList.add("dragging");

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

    carousel.classList.remove("dragging");

    const scrollLeftPos = carousel.scrollLeft;
    const prevPos = scrollData.startScrollLeftPos;

    const carouselPos = roundToMultiple(
      scrollLeftPos,
      cardWidth + gapValue,
      prevPos
    );
    removeLeftControllerClass(carouselPos);
    if (carousel.scrollWidth - carouselPos - carousel.offsetWidth < 20) {
      removeRightControllerClass(true);
    } else removeRightControllerClass(false);

    carousel.scrollLeft = carouselPos;
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

    if (
      button === "left" &&
      carousel.scrollLeft - (cardWidth + gapValue) * getVisibleCards() <= 200
    ) {
      removeLeftControllerClass(0);
    } else if (button !== "left" && carousel.scrollLeft >= 0) {
      removeLeftControllerClass(201);
    }

    const nextScroll =
      carousel.scrollLeft + (cardWidth + gapValue) * getVisibleCards();

    if (
      button !== "left" &&
      carousel.scrollWidth - nextScroll - carousel.offsetWidth < 20
    ) {
      removeRightControllerClass(true);
    } else {
      removeRightControllerClass(false);
    }
  };

  return {
    dragStart,
    dragStop,
    dragging,
    buttonHandler,
    carouselRef,
    leftControllerRef,
    rightControllerRef,
    cardRef,
    scrollData,
  };
};

export default useCarousel;
