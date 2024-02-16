import { Dots, MarkerContainer } from "./style";

const Markers = ({
  markerRef,
  handler,
}: {
  markerRef: React.MutableRefObject<null>;
  handler: (marker: number) => void;
}) => {
  return (
    <MarkerContainer ref={markerRef}>
      <Dots className="current" onClick={() => handler(0)} />
      <Dots onClick={() => handler(1)} />
      <Dots onClick={() => handler(2)} />
      <Dots onClick={() => handler(3)} />
      <Dots onClick={() => handler(4)} />
      <Dots onClick={() => handler(5)} />
    </MarkerContainer>
  );
};
export default Markers;
