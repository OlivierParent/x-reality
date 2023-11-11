import { PositionalAudio, Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { PositionalAudio as PositionalAudioType } from "three";

import badassAudioFile from "Components/Sound/audio/bensound-badass.mp3";

const SoundPositional = (props: GroupProps): JSX.Element => {
  const positionalAudioRef = useRef<PositionalAudioType>(null!);

  return (
    <group {...props}>
      <Text
        onClick={() => {
          //   positionalAudioRef.current.isPlaying
          //     ? positionalAudioRef.current.stop()
          //     : positionalAudioRef.current.play();
        }}
        onPointerEnter={() => {
          if (!positionalAudioRef.current.isPlaying) {
            positionalAudioRef.current.play();
          }
        }}
        position={[0, 0.5, 0]}
      >
        Music: https://www.bensound.com
      </Text>
      <mesh>
        <PositionalAudio
          autoplay={true}
          distance={1}
          loop={true}
          ref={positionalAudioRef}
          url={badassAudioFile}
        />
      </mesh>
    </group>
  );
};

export { SoundPositional as Sound };
