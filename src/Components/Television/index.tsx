import { Plane, RoundedBox, Text, useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useCallback, useState } from "react";

import { Material as MaterialVideo } from "Components/Material/Video";
import { VideoItem } from "Types/VideoItem";

import videoByDanaNettles from "Components/Television/assets/Video_by_Dana_Nettles.mp4";

const SAFE_OFFSET = 0.01; // Safe offset to avoid z-fighting.
const TELEVISION = {
  ASPECT_RATIO: 16 / 9,
  SIZE: 2,
  DEPTH: 0.2,
  EDGE: {
    SIZE: 0.1,
    RADIUS: 0.1,
  },
} as const;

const VIDEO_ITEMS: VideoItem[] = [
  {
    src: videoByDanaNettles,
    title: "Video by Dana Nettles",
    url: "https://www.pexels.com/video/pouring-a-hot-tea-on-a-crystal-cup-3568312/",
  },
];

const width = TELEVISION.SIZE * TELEVISION.ASPECT_RATIO;
const height = TELEVISION.SIZE;

/**
 * Television.
 *
 * @returns {React.JSX.Element}
 */
function Television(props: GroupProps): React.JSX.Element {
  // States.
  const [hover, setHover] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  // Event handlers.
  const clickHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setToggle((state) => !state);
  }, []);
  const pointerOutHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setHover(false);
  }, []);
  const pointerOverHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setHover(true);
  }, []);

  useCursor(hover);

  return (
    <group name="Television" {...props}>
      <group
        onClick={clickHandler} // Sound is only allowed after a user action.
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
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
          <MaterialVideo //
            play={toggle}
            src={VIDEO_ITEMS[0].src}
          />
        </Plane>
      </group>
      <Text //
        color={0x666666}
        fontSize={0.1}
        position={[0, -0.1, 0]}
      >
        {`${VIDEO_ITEMS[0].title} — ${VIDEO_ITEMS[0].url}`}
      </Text>
    </group>
  );
}

export { Television };