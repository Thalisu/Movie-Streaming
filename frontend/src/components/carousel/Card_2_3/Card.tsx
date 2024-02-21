import { useQuery } from "@tanstack/react-query";
import movieService from "../../../services/movieService";
import { Card, FinalCard, CardImg } from "./style";

const Cards = ({ cardRef }: { cardRef: React.MutableRefObject<null> }) => {
  const { data: movies, isLoading } = useQuery({
    queryFn: () => movieService.getMovies(29, "", "week"),
    queryKey: ["trending"],
  });

  const loadedImgFadeIn = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.add("loaded");
  };

  if (isLoading) {
    return;
  }

  return (
    <>
      {movies?.map((movie, i) => {
        const itemProps = i === 0 ? { $first: true, ref: cardRef } : {};
        return (
          <Card key={movie.id + i} {...itemProps} draggable="false">
            <CardImg
              src={movie.poster_path}
              draggable="false"
              loading="lazy"
              onLoad={(event) => loadedImgFadeIn(event)}
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
