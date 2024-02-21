import movieService from "../../../services/movieService";
import { Banner, BannerImg } from "./style";
import TrendingMovie from "../../moviesBanner";
import { useQuery } from "@tanstack/react-query";
const BannerCarousel = ({
  BannerRef,
}: {
  BannerRef: React.MutableRefObject<null>;
}) => {
  const { data: movies, isLoading } = useQuery({
    queryFn: () => movieService.getMovies(6, "popular"),
    queryKey: ["popular"],
  });

  const loadedImgFadeIn = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.add("loaded");
  };

  if (isLoading) {
    return;
  }

  return (
    <>
      {movies?.map((movie) => {
        return (
          <Banner key={movie.id} draggable="false" ref={BannerRef}>
            <BannerImg
              src={movie.backdrop_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
            />
            <TrendingMovie movie={movie} />
          </Banner>
        );
      })}
    </>
  );
};

export default BannerCarousel;
