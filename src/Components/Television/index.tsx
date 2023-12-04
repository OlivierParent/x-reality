import { Plane, Text, useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useCallback, useState } from "react";

import { Material as MaterialVideo } from "Components/Material/Video";

import videoByDanaNettles from "Components/Television/assets/Video_by_Dana_Nettles.mp4";

const ASPECT_RATIO = 16 / 9;
const SIZE = 3;

const width = SIZE * ASPECT_RATIO;
const height = SIZE;

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
    <group {...props}>
      <Plane //
        args={[width, height]}
        onClick={clickHandler} // Sound is only allowed after a user action.
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        position={[0, height / 2, 0]}
      >
        <MaterialVideo //
          play={toggle}
          src={videoByDanaNettles}
        />
      </Plane>

      <Text //
        color={0x666666}
        fontSize={0.1}
        position={[0, -0.1, 0]}
      >
        Video by Dana Nettles &mdash;
        https://www.pexels.com/video/pouring-a-hot-tea-on-a-crystal-cup-3568312/
      </Text>
    </group>
  );
}

export { Television };
