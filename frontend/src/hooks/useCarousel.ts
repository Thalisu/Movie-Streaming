import { useRef } from "react";

const useCarousel = () => {
  const carouselRef = useRef(null);
  const cardRef = useRef(null);
  const markerRef = useRef(null);
  const leftControllerRef = useRef(null);
  const rightControllerRef = useRef(null);

  const scrollDataRef = useRef({
    isDragging: false,
    startX: 0,
    PrevScrollPos: 0,
    prevMarker: 0,
    gapValue: 0,
  });

  const dragStart = (e: React.MouseEvent) => {
    if (carouselRef.current === null) return null;

    const carousel: HTMLElement = carouselRef.current;

    scrollDataRef.current.isDragging = true;
    carousel.classList.add("dragging");

    scrollDataRef.current.startX = e.pageX;
  };

  const dragging = (e: React.MouseEvent) => {
    if (!scrollDataRef.current.isDragging) return;
    if (carouselRef.current === null) return;

    const carousel: HTMLElement = carouselRef.current;
    const startX = scrollDataRef.current.startX;
    const PrevScrollPos = scrollDataRef.current.PrevScrollPos;

    carousel.scrollLeft = PrevScrollPos - (e.pageX - startX);
  };

  const dragStop = () => {
    if (carouselRef.current === null) return;

    const carousel: HTMLElement = carouselRef.current;
    const rawNextPos = carousel.scrollLeft;
    const prevScrollPos = scrollDataRef.current.PrevScrollPos;

    const carouselNextPos = roundToCard(
      rawNextPos,
      getCardWidth(),
      prevScrollPos
    );

    checkCarousel(carouselNextPos, carousel.scrollWidth, carousel.offsetWidth);

    carousel.classList.remove("dragging");
    moveScroller(carouselNextPos, carousel);
    scrollDataRef.current.isDragging = false;
  };

  const buttonHandler = (button: string) => {
    if (carouselRef.current === null) return;
    if (cardRef.current === null) return;

    const carousel: HTMLElement = carouselRef.current;
    const prevScrollPos = scrollDataRef.current.PrevScrollPos;
    const rawNextPos =
      button === "left"
        ? carousel.scrollLeft - getCardWidth() * getVisibleCards()
        : carousel.scrollLeft + getCardWidth() * getVisibleCards();

    const carouselNextPos = roundToCard(
      rawNextPos,
      getCardWidth(),
      prevScrollPos
    );

    checkCarousel(carouselNextPos, carousel.scrollWidth, carousel.offsetWidth);

    moveScroller(carouselNextPos, carousel);
  };

  const markerHandler = (marker: number) => {
    if (carouselRef.current === null) return;
    const carousel: HTMLElement = carouselRef.current;

    const carouselNextPos = marker * getCardWidth();

    checkCarousel(carouselNextPos, carousel.scrollWidth, carousel.offsetWidth);

    moveScroller(carouselNextPos, carousel);
  };

  const onLoad = () => {
    checkLeftControllerButton(scrollDataRef.current.PrevScrollPos <= 0);
    scrollDataRef.current.gapValue = getGapValue();
  };

  const moveScroller = (carouselNextPos: number, carousel: HTMLElement) => {
    carousel.scrollLeft = carouselNextPos;
    scrollDataRef.current.PrevScrollPos = carouselNextPos;
  };

  const checkCarousel = (nextPos: number, sWidth: number, oWidth: number) => {
    checkLeftControllerButton(nextPos <= 0);
    checkRightControllerButton(sWidth - nextPos - oWidth < 20);
    checkCurrentMarker(nextPos);
  };

  const checkLeftControllerButton = (add: boolean) => {
    if (leftControllerRef.current === null) return;
    const controller: HTMLElement = leftControllerRef.current;

    add
      ? controller.classList.add("start")
      : controller.classList.remove("start");
  };

  const checkRightControllerButton = (add: boolean) => {
    if (rightControllerRef.current === null) return;
    const controller: HTMLElement = rightControllerRef.current;

    add ? controller.classList.add("end") : controller.classList.remove("end");
  };

  const checkCurrentMarker = (carouselPos: number) => {
    if (markerRef.current === null) return;
    if (cardRef.current === null) return;

    const markerContainer: HTMLElement = markerRef.current;
    const marker = markerContainer.childNodes[
      carouselPos / getCardWidth()
    ] as HTMLElement;
    if (!marker) return;
    const prevMarker = markerContainer.childNodes[
      scrollDataRef.current.prevMarker
    ] as HTMLElement;

    prevMarker.classList.remove("current");
    marker.classList.add("current");

    scrollDataRef.current.prevMarker = carouselPos / getCardWidth();
  };

  const getVisibleCards = () => {
    if (carouselRef.current === null) return 0;
    const carousel: HTMLElement = carouselRef.current;
    const carouselWidth = carousel.offsetWidth;

    return Math.floor(carouselWidth / getCardWidth());
  };

  const getGapValue = () => {
    if (carouselRef.current === null) return 0;
    const carousel: HTMLElement = carouselRef.current;

    return Number(getComputedStyle(carousel).gap.replace(/[a-zA-Z]/g, ""));
  };

  const getCardWidth = () => {
    if (cardRef.current === null) return 0;
    const card: HTMLElement = cardRef.current;

    return card.offsetWidth + scrollDataRef.current.gapValue;
  };

  const roundToCard = (
    scrollPos: number,
    widthToRound: number,
    prevPos: number
  ) => {
    return prevPos <= scrollPos
      ? Math.ceil(scrollPos / widthToRound) * widthToRound
      : Math.floor(scrollPos / widthToRound) * widthToRound;
  };

  return {
    carouselRef,
    leftControllerRef,
    rightControllerRef,
    cardRef,
    markerRef,
    dragStart,
    dragStop,
    dragging,
    buttonHandler,
    markerHandler,
    onLoad,
  };
};

export default useCarousel;
