import { GroupProps } from "@react-three/fiber";

import { TELEVISION } from "Components/Television/Television.config";
import { Button } from "Components/Television/Button";

type TelevisionRemoteProps = {
  isLoopToggled: boolean;
  isMutedToggled: boolean;
  isPlayToggled: boolean;
  loopClickHandler: Function;
  mutedClickHandler: Function;
  playClickHandler: Function;
  volume: number;
  volumeDownClickHandler: Function;
  volumeUpClickHandler: Function;
};

/**
 * Television Remote.
 *
 * @param {GroupProps & TelevisionRemoteProps} props
 * @returns {JSX.Element}
 */
const TelevisionRemote = (
  props: GroupProps & TelevisionRemoteProps
): JSX.Element => {
  const {
    isLoopToggled,
    isMutedToggled,
    isPlayToggled,
    loopClickHandler,
    mutedClickHandler,
    playClickHandler,
    volume,
    volumeDownClickHandler,
    volumeUpClickHandler,
    position,
    rotation,
  } = props;

  return (
    <group name="Television Remote" position={position} rotation={rotation}>
      <Button
        clickHandler={mutedClickHandler}
        color={isMutedToggled ? "#ffff00" : "#999900"}
        colorHover="#ff00ff"
        name="Mute Button"
        position={[0, TELEVISION.BUTTON.SIZE * 2 * 1, 0]}
        tooltip={`Set muted to ${isMutedToggled ? "off" : "on"}.`}
      />
      <Button
        clickHandler={playClickHandler}
        color={isPlayToggled ? "#ff0000" : "#990000"}
        colorHover="#ff00ff"
        name="Play Button"
        position={[0, TELEVISION.BUTTON.SIZE * 2 * 0, 0]}
        tooltip={`${isPlayToggled ? "Pause" : "Play"} video.`}
      />
      <Button
        clickHandler={loopClickHandler}
        color={isLoopToggled ? "#0000ff" : "#000099"}
        colorHover="#ff00ff"
        name="Loop Button"
        position={[0, -TELEVISION.BUTTON.SIZE * 2 * 1, 0]}
        tooltip={`Set loop to ${isLoopToggled ? "on" : "off"}.`}
      />
      <Button
        clickHandler={volumeUpClickHandler}
        color={isLoopToggled ? "#00ff00" : "#009900"}
        colorHover="#ffff00"
        name="Volume Up Button"
        position={[0, -TELEVISION.BUTTON.SIZE * 2 * 2, 0]}
        tooltip={`Turn volume up (${volume}%).`}
      />
      <Button
        clickHandler={volumeDownClickHandler}
        color={isLoopToggled ? "#ff0000" : "#990000"}
        colorHover="#ffff00"
        name="Volume Down Button"
        position={[0, -TELEVISION.BUTTON.SIZE * 2 * 3, 0]}
        tooltip={`Turn volume down (${volume}%).`}
      />
    </group>
  );
};

export { TelevisionRemote as Remote };
