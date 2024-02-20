import { YoutubeApiCommands } from "../../../types";
import { ThumbIndicator, TimelineBar, TimelineContainer } from "./style";

const Timeline = ({ api }: { api: YoutubeApiCommands }) => (
  <TimelineContainer
    ref={api.timelineRef}
    onMouseMove={(event) => api.handleTimelineUpdate(event)}
    onMouseDown={(event) => api.toggleDragging(event)}
  >
    <TimelineBar>
      <ThumbIndicator />
    </TimelineBar>
  </TimelineContainer>
);

export default Timeline;
