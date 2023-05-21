import { PositionalAudio, Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef, useState } from "react";

import badassAudioFile from "./audio/bensound-badass.mp3";

const SoundPositional = (props: GroupProps): JSX.Element => {
  const positionalAudioRef = useRef<typeof PositionalAudio>(null!);
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
        load={true}
        ref={positionalAudioRef}
        url={badassAudioFile}
      />
    </group>
  );
};

export { SoundPositional };
