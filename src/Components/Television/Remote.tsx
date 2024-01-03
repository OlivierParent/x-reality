import { RoundedBox } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import { Button } from "Components/Television/Button";
import { TELEVISION } from "Components/Television/Television.config";

import pauseBootstrapIconsSvg from "bootstrap-icons/icons/pause.svg";
import playBootstrapIconsSvg from "bootstrap-icons/icons/play.svg";
import repeatBootstrapIconsSvg from "bootstrap-icons/icons/repeat.svg";
import volumeDownBootstrapIconsSvg from "bootstrap-icons/icons/volume-down.svg";
import volumeMuteBootstrapIconsSvg from "bootstrap-icons/icons/volume-mute.svg";
import volumeUpBootstrapIconsSvg from "bootstrap-icons/icons/volume-up.svg";

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

const radius = (TELEVISION.SIZE * TELEVISION.BUTTON.SIZE) / 2;
const depth = TELEVISION.DEPTH / 4;
const height = radius * 12;
const width = radius * 2;
const yOffset = TELEVISION.BUTTON.SIZE * 2 + 0.05;

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
    <group
      name="Television Remote" //
      position={position}
      rotation={rotation}
    >
      <RoundedBox
        args={[
          width + 2 * TELEVISION.EDGE.SIZE,
          height + 2 * TELEVISION.EDGE.SIZE,
          depth,
        ]}
        castShadow={true}
        radius={TELEVISION.EDGE.RADIUS / 4}
        position={[0, 0, -depth]}
        receiveShadow={true}
      >
        <meshStandardMaterial color={0x333333} />
      </RoundedBox>
      <Button
        clickHandler={mutedClickHandler}
        color={isMutedToggled ? "#666600" : "#444444"}
        colorHover={isMutedToggled ? "#ff0000" : "#00ff00"}
        icon={volumeMuteBootstrapIconsSvg}
        name="Mute Button"
        position={[0, 2 * yOffset, 0]}
        tooltip={`Set muted to ${isMutedToggled ? "off" : "on"}.`}
      />
      <Button
        clickHandler={playClickHandler}
        color={isPlayToggled ? "#660000" : "#006600"}
        colorHover={isPlayToggled ? "#ff0000" : "#00ff00"}
        icon={isPlayToggled ? pauseBootstrapIconsSvg : playBootstrapIconsSvg}
        name="Play Button"
        position={[0, 1 * yOffset, 0]}
        tooltip={`${isPlayToggled ? "Pause" : "Play"} video.`}
      />
      <Button
        clickHandler={loopClickHandler}
        color={isLoopToggled ? "#666600" : "#444444"}
        colorHover="#0000ff"
        icon={repeatBootstrapIconsSvg}
        name="Loop Button"
        position={[0, 0, 0]}
        tooltip={`Set loop to ${isLoopToggled ? "on" : "off"}.`}
      />
      <Button
        clickHandler={volumeUpClickHandler}
        color="#444444"
        colorHover="#0000ff"
        icon={volumeUpBootstrapIconsSvg}
        name="Volume Up Button"
        position={[0, -1 * yOffset, 0]}
        tooltip={`Turn volume up (${volume}%).`}
      />
      <Button
        clickHandler={volumeDownClickHandler}
        color="#444444"
        colorHover="#0000ff"
        icon={volumeDownBootstrapIconsSvg}
        name="Volume Down Button"
        position={[0, -2 * yOffset, 0]}
        tooltip={`Turn volume down (${volume}%).`}
      />
    </group>
  );
};

export { TelevisionRemote as Remote };
