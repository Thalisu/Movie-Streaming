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

    checkCurrentMarker(carouselNextPos);
    checkLeftControllerButton(carouselNextPos <= 0);
    checkRightControllerButton(
      carousel.scrollWidth - carouselNextPos - carousel.offsetWidth < 20
    );

    carousel.classList.remove("dragging");
    carousel.scrollLeft = carouselNextPos;
    scrollDataRef.current.PrevScrollPos = carouselNextPos;
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

    checkLeftControllerButton(carouselNextPos <= 0);
    checkCurrentMarker(carouselNextPos);
    checkRightControllerButton(
      carousel.scrollWidth - carouselNextPos - carousel.offsetWidth < 20
    );

    carousel.scrollLeft = carouselNextPos;
    scrollDataRef.current.PrevScrollPos = carouselNextPos;
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

  const checkCurrentMarker = (carouselPos: number) => {
    if (markerRef.current === null) return;
    if (cardRef.current === null) return;

    const markerContainer: HTMLElement = markerRef.current;
    const card: HTMLElement = cardRef.current;
    const marker = markerContainer.childNodes[
      carouselPos / card.offsetWidth
    ] as HTMLElement;
    if (!marker) return;
    const prevMarker = markerContainer.childNodes[
      scrollDataRef.current.prevMarker
    ] as HTMLElement;

    prevMarker.classList.remove("current");
    marker.classList.add("current");

    scrollDataRef.current.prevMarker = carouselPos / card.offsetWidth;
  };

  const onLoad = () => {
    checkLeftControllerButton(scrollDataRef.current.PrevScrollPos <= 0);
    scrollDataRef.current.gapValue = getGapValue();
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
    markerRef,
    onLoad,
  };
};

export default useCarousel;
