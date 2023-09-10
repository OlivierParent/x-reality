import { PositionalAudio, Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { PositionalAudio as PositionalAudioType } from "three";

import badassAudioFile from "./audio/bensound-badass.mp3";

const SoundPositional = (props: GroupProps): JSX.Element => {
  const positionalAudioRef = useRef<PositionalAudioType>(null!);

  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <group {...props}>
      <Text
        onClick={() => {
          console.log(
            isPlaying,
            positionalAudioRef.current,
            typeof positionalAudioRef.current
          );
          //   isPlaying
          //     ? positionalAudioRef.current.stop()
          //     : positionalAudioRef.current.play();
          setIsPlaying((state) => !state);
        }}
      >
        Music: https://www.bensound.com
      </Text>
      <PositionalAudio
        distance={1}
        loop={true}
        ref={positionalAudioRef}
        url={badassAudioFile}
      />
    </group>
  );
};

export { SoundPositional };
