import { Dots, MarkerContainer } from "./style";

const Markers = ({
  markerRef,
}: {
  markerRef: React.MutableRefObject<null>;
}) => {
  return (
    <MarkerContainer ref={markerRef}>
      <Dots className="current" />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
    </MarkerContainer>
  );
};
export default Markers;
