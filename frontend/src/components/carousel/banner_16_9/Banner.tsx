import movieService from "../../../services/movieService";
import { useEffect, useState } from "react";
import { Movie } from "../../../types";
import { Banner, BannerImg } from "./style";
import TrendingMovie from "../../moviesBanner";
const BannerCarousel = ({
  BannerRef,
}: {
  BannerRef: React.MutableRefObject<null>;
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    movieService.getMovies(6, "popular").then((data) => setMovies(data));
  }, []);
  const loadedImgFadeIn = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.add("loaded");
  };
  return (
    <>
      {movies.map((movie) => {
        return (
          <Banner key={movie.id} draggable="false" ref={BannerRef}>
            <BannerImg
              src={movie.backdrop_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
            />
            {/*             <TrendingMovie movie={movie} /> */}
          </Banner>
        );
      })}
    </>
  );
};

export default BannerCarousel;
