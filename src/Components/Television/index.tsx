import { Plane, RoundedBox, Svg, Text } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useCallback, useState } from "react";

import { Material as MaterialVideo } from "Components/Material/Video";
import { TELEVISION } from "Components/Television/Television.config";
import { VideoItem } from "Types/VideoItem";

import videoByDanaNettles from "Components/Television/assets/Video_by_Dana_Nettles.mp4";
import bootstrapIconsVolumeDownSvg from "bootstrap-icons/icons/volume-down.svg";
import { MathUtils } from "three/src/math/MathUtils";
import { Remote } from "./Remote";

const SAFE_OFFSET = 0.01; // Safe offset to avoid z-fighting.
const VIDEO_ITEMS: VideoItem[] = [
  {
    src: videoByDanaNettles,
    title: "Video by Dana Nettles",
    url: "https://www.pexels.com/video/pouring-a-hot-tea-on-a-crystal-cup-3568312/",
  },
];

const height = TELEVISION.SIZE;
const width = TELEVISION.SIZE * TELEVISION.PANEL.ASPECT_RATIO;

/**
 * Television.
 *
 * @returns {JSX.Element}
 */
const Television = (props: GroupProps): JSX.Element => {
  // States.
  const [isLoopToggled, setIsLoopToggled] = useState<boolean>(true);
  const [isMutedToggled, setIsMutedToggled] = useState<boolean>(false);
  const [isPlayToggled, setIsPlayToggled] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(TELEVISION.VOLUME.MAXIMUM);

  // Event handlers.
  const loopClickHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsLoopToggled((state) => !state);
  }, []);
  const mutedClickHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsMutedToggled((state) => !state);
  }, []);
  const playClickHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsPlayToggled((state) => !state);
  }, []);
  const volumeDownClickHandler = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      setVolume((volume) => {
        volume -= TELEVISION.VOLUME.STEP;

        return TELEVISION.VOLUME.MINIMUM < volume
          ? volume
          : TELEVISION.VOLUME.MINIMUM;
      });
    },
    []
  );
  const volumeUpClickHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setVolume((volume) => {
      volume += TELEVISION.VOLUME.STEP;

      return volume < TELEVISION.VOLUME.MAXIMUM
        ? volume
        : TELEVISION.VOLUME.MAXIMUM;
    });
  }, []);

  return (
    <group name="Television" {...props}>
      <group
        position={[
          0,
          (TELEVISION.SIZE + TELEVISION.EDGE.RADIUS) / 2 +
            TELEVISION.EDGE.RADIUS * 3,
          0,
        ]}
      >
        <RoundedBox
          args={[
            width + 2 * TELEVISION.EDGE.SIZE,
            height + 2 * TELEVISION.EDGE.SIZE,
            TELEVISION.DEPTH,
          ]}
          castShadow={true}
          position={[0, 0, -(TELEVISION.DEPTH / 2)]}
          radius={TELEVISION.EDGE.RADIUS}
          receiveShadow={true}
        >
          <meshStandardMaterial color={0x333333} />
        </RoundedBox>
        <Plane //
          args={[width, height]}
          position={[0, 0, SAFE_OFFSET]}
        >
          <MaterialVideo
            loop={isLoopToggled}
            muted={isMutedToggled}
            play={isPlayToggled}
            src={VIDEO_ITEMS[0].src}
            volume={volume / TELEVISION.VOLUME.MAXIMUM}
          />
        </Plane>
      </group>
      <Remote
        isLoopToggled={isLoopToggled}
        isMutedToggled={isMutedToggled}
        isPlayToggled={isPlayToggled}
        loopClickHandler={loopClickHandler}
        mutedClickHandler={mutedClickHandler}
        playClickHandler={playClickHandler}
        position={[0, 0, 3]}
        rotation={[-MathUtils.degToRad(45), 0, 0]}
        volume={volume}
        volumeDownClickHandler={volumeDownClickHandler}
        volumeUpClickHandler={volumeUpClickHandler}
      />
      <Text //
        color={0x666666}
        fontSize={0.1}
        position={[0, -0.1, 0]}
      >
        {`${VIDEO_ITEMS[0].title} \u2014 ${VIDEO_ITEMS[0].url}`}
      </Text>
      <Svg src={bootstrapIconsVolumeDownSvg}>
        <meshBasicMaterial color={0x666666} />
      </Svg>
    </group>
  );
};

export { Television };
