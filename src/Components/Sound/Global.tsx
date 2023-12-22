import { Text } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useEffect, useState } from "react";

import evolutionAudioFile from "Components/Sound/audio/bensound-evolution.mp3";

const audio = new Audio(evolutionAudioFile);
audio.volume = 0.02;

/**
 * Global sound.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const SoundGlobal = (props: GroupProps): JSX.Element => {
  // States.
  const [isToggled, setIsToggled] = useState(false);

  // Event handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsToggled((state) => !state);
  };

  useEffect(() => {
    if (isToggled) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isToggled]);

  return (
    <group {...props}>
      <Text //
        fontSize={0.2}
        onClick={clickHandler}
        position={[0, 0.5, 0]}
      >
        Global Audio, {isToggled ? "playing" : "music"}:
        https://www.bensound.com
      </Text>
    </group>
  );
};

export { SoundGlobal as Sound };
