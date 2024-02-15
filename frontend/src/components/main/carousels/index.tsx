import {
  VisibleArea,
  CarouselContainer,
  Card,
  CarouselController,
  Button,
} from "./style";

import arrow from "../../../assets/icons/arrow.svg";
import useSlider from "../../../hooks/useSlider";

import movieService from "../../../services/movieService";
import { useEffect, useState } from "react";
import { Movies } from "../../../types";

const Carousel = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  useEffect(() => {
    movieService.getMovies("week", 29).then((data) => setMovies(data));
  }, []);
  const slider = useSlider();

  return (
    <VisibleArea
      onMouseDown={(event) => slider.dragStart(event)}
      onMouseUp={() => slider.dragStop()}
      onMouseMove={(event) => slider.dragging(event)}
    >
      <CarouselController onClick={() => slider.buttonHandler("left")}>
        <Button src={arrow} />
      </CarouselController>
      <CarouselContainer
        ref={slider.carouselRef}
        $isDragging={slider.scrollData.isDragging}
      >
        {movies.map((movie, i) => {
          return i === 0 ? (
            <Card
              key={movie.id}
              ref={slider.cardRef}
              $first={true}
              $imageUrl={movie.poster_path}
              draggable="false"
            ></Card>
          ) : (
            <Card
              key={movie.id}
              $imageUrl={movie.poster_path}
              draggable="false"
            ></Card>
          );
        })}
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
