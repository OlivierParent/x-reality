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
 * @returns {React.JSX.Element}
 */
const SoundGlobal = (props: GroupProps): React.JSX.Element => {
  // States.
  const [toggle, setToggle] = useState(false);

  // Event handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setToggle((state) => !state);
  };

  useEffect(() => {
    if (toggle) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [toggle]);

  return (
    <group {...props}>
      <Text //
        fontSize={0.2}
        onClick={clickHandler}
        position={[0, 0.5, 0]}
      >
        Global Audio, {toggle ? "playing" : "music"}: https://www.bensound.com
      </Text>
    </group>
  );
};

export { SoundGlobal as Sound };
