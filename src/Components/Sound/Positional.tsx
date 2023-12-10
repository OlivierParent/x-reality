import { PositionalAudio, Text } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { PositionalAudio as PositionalAudioType } from "three";

import badassAudioFile from "Components/Sound/audio/bensound-badass.mp3";

/**
 * Positional sound.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const SoundPositional = (props: GroupProps): React.JSX.Element => {
  // References.
  const positionalAudioRef = useRef<PositionalAudioType>(null!);

  // States.
  const [isToggled, setIsToggled] = useState(false);

  // Event handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsToggled((state) => !state);
  };

  useEffect(() => {
    if (!positionalAudioRef.current.isPlaying) {
      positionalAudioRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (isToggled) {
      positionalAudioRef.current.play();
    } else {
      positionalAudioRef.current.stop();
    }
  }, [isToggled]);

  return (
    <group {...props}>
      <Text //
        fontSize={0.2}
        onClick={clickHandler}
        position={[0, 0.5, 0]}
      >
        Positional Audio, {isToggled ? "playing" : "music"}:
        https://www.bensound.com
      </Text>
      <PositionalAudio
        autoplay={true}
        distance={1}
        loop={true}
        ref={positionalAudioRef}
        url={badassAudioFile}
      />
    </group>
  );
};

export { SoundPositional as Sound };
