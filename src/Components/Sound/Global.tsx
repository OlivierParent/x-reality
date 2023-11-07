import { PositionalAudio, Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { PositionalAudio as PositionalAudioType } from "three";

import badassAudioFile from "Components/Sound/audio/bensound-badass.mp3";

const SoundGlobal = (props: GroupProps): JSX.Element => {
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

export { SoundGlobal as Sound };
