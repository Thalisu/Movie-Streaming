import { API } from "../../../types";
import useTimeline from "../playerInterfaceFunctions/useTimeline";
import { ThumbIndicator, TimelineBar, TimelineContainer } from "./style";

const Timeline = ({ api }: { api: API }) => {
  const { handleTimelineUpdate, toggleDragging } = useTimeline(api);

  return (
    <TimelineContainer
      ref={api.timelineRef}
      onMouseMove={(event) => handleTimelineUpdate(event)}
      onMouseDown={(event) => toggleDragging(event)}
    >
      <TimelineBar>
        <ThumbIndicator />
      </TimelineBar>
    </TimelineContainer>
  );
};

export default Timeline;
