import useCarousel from "../../../hooks/useCarousel";
import {
  VisibleArea,
  CarouselContainer,
  CarouselController,
  Button,
} from "./style";

import arrow from "/assets/arrow.svg?url";

import BannerCarousel from "./Banner";
import Markers from "../../markers/Markers";

const Carousel = () => {
  const carousel = useCarousel();

  return (
    <VisibleArea
      onMouseDown={(event) => carousel.dragStart(event)}
      onMouseUp={() => carousel.dragStop()}
      onMouseMove={(event) => carousel.dragging(event)}
    >
      <Markers
        markerRef={carousel.markerRef}
        handler={carousel.markerHandler}
      />
      <CarouselController
        onClick={() => carousel.buttonHandler("left")}
        ref={carousel.leftControllerRef}
      >
        <Button src={arrow} />
      </CarouselController>
      <CarouselContainer
        ref={carousel.carouselRef}
        onLoad={() => carousel.onLoad()}
      >
        <BannerCarousel BannerRef={carousel.cardRef} />
      </CarouselContainer>
      <CarouselController
        $right={true}
        onClick={() => carousel.buttonHandler("right")}
        ref={carousel.rightControllerRef}
      >
        <Button src={arrow} $right={true} />
      </CarouselController>
    </VisibleArea>
  );
};

export default Carousel;
