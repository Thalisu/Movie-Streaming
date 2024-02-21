import { ControlsProps } from "../../../types";
import { formatTime } from "../utils";

const skipButton = (seconds: number, props: ControlsProps) => {
  const { player, currentTimeRef, timelineRef, totalTimeRef } = props;
  if (player === null) return;
  if (currentTimeRef.current === null) return;
  if (timelineRef.current === null) return;

  const skipTo = Number(currentTimeRef.current.id) + seconds;
  currentTimeRef.current.id = skipTo.toString();
  player.seekTo(skipTo, true);

  const percent =
    Number(currentTimeRef.current.id) / Number(totalTimeRef.current?.id);
  timelineRef.current.style.setProperty(
    "--progress-position",
    percent.toString()
  );

  const currentTime = formatTime(skipTo);
  currentTimeRef.current.textContent = currentTime;
};
export default skipButton;
