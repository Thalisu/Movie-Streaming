import movieService from "../../../services/movieService";
import {
  Banner,
  BannerImg,
  LoadingCard,
  LoadingContainer,
  LoadingSpan,
} from "./style";
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

  const loadImgError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
    path: string
  ) => {
    event.currentTarget.src = "";
    event.currentTarget.src = path;
  };

  if (isLoading) {
    return Array.from({ length: 6 }, () => "c").map((_c, i) => {
      const itemProps = i === 0 ? { ref: BannerRef } : {};
      return (
        <LoadingContainer key={Math.random() * 9999} {...itemProps}>
          <LoadingCard>
            <LoadingSpan />
          </LoadingCard>
        </LoadingContainer>
      );
    });
  }

  return (
    <>
      {movies?.map((movie, i) => {
        const itemProps = i === 0 ? { ref: BannerRef } : {};
        if (movie.poster_path.includes("null")) return;
        return (
          <Banner key={movie.id} draggable="false" {...itemProps}>
            <BannerImg
              src={movie.backdrop_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
              onError={(event) => loadImgError(event, movie.backdrop_path)}
            />
            <TrendingMovie movie={movie} />
          </Banner>
        );
      })}
    </>
  );
};

export default BannerCarousel;
