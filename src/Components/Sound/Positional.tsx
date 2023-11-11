import { PositionalAudio, Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { PositionalAudio as PositionalAudioType } from "three";

import badassAudioFile from "Components/Sound/audio/bensound-badass.mp3";

const SoundPositional = (props: GroupProps): JSX.Element => {
  // References.
  const positionalAudioRef = useRef<PositionalAudioType>(null!);

  // States.
  const [toggle, setToggle] = useState(false);

  // Event handlers.
  const clickHandler = () => {
    setToggle((state) => !state);
  };

  useEffect(() => {
    if (!positionalAudioRef.current.isPlaying) {
      positionalAudioRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (toggle) {
      positionalAudioRef.current.play();
    } else {
      positionalAudioRef.current.stop();
    }
  }, [toggle]);

  return (
    <group {...props}>
      <Text //
        fontSize={0.2}
        onClick={clickHandler}
        position={[0, 0.5, 0]}
      >
        Positional Audio, {toggle ? "playing" : "music"}:
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
