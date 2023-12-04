import { Circle } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { MathUtils } from "three";

import { Material } from "Components/Material/Reflector";
import { Painting } from "Components/Painting";
import { SuzanneFrostedGlass } from "Components/Suzanne/FrostedGlass";

/**
 * Composition with a painting and Suzanne.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Composition = (props: GroupProps): React.JSX.Element => {
  return (
    <group //
      name="Composition"
      {...props}
    >
      <Painting //
        position={[0, 0, -1]}
      />
      <SuzanneFrostedGlass //
        position={[0, 0, 1]}
      />
      <Circle
        args={[10, 10]}
        position={[0, -2.5, 0]}
        rotation={[MathUtils.degToRad(-90), 0, 0]}
      >
        <Material />
      </Circle>
    </group>
  );
};

export { Composition };
