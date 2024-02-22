import { useQuery } from "@tanstack/react-query";
import movieService from "../../../services/movieService";
import { Card, FinalCard, CardImg, LoadingCard, LoadingSpan } from "./style";
import { LoadingContainer } from "./style";

const Cards = ({ cardRef }: { cardRef: React.MutableRefObject<null> }) => {
  const { data: movies, isLoading } = useQuery({
    queryFn: () => movieService.getMovies(29, "", "week"),
    queryKey: ["trending"],
  });

  const loadedImgFadeIn = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
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
    return Array.from({ length: 29 }, () => "c").map((_c, i) => {
      const itemProps = i === 0 ? { $first: true, ref: cardRef } : {};
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
        const itemProps = i === 0 ? { $first: true, ref: cardRef } : {};
        if (movie.poster_path.includes("null")) return;
        return (
          <Card key={movie.id + i} {...itemProps} draggable="false">
            <CardImg
              src={movie.poster_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
              onError={(event) => loadImgError(event, movie.poster_path)}
            />
          </Card>
        );
      })}
      <FinalCard>
        <span>See more</span>
      </FinalCard>
    </>
  );
};

export default Cards;
