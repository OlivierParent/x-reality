import { RoundedBox } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/RoundedBox";
import { Children } from "Types/Children";

/**
 * RoundedBox geometry.
 *
 * @see https://github.com/pmndrs/drei#roundedbox
 *
 * @returns {JSX.Element}
 */
const Geometry3DRoundedBox = ({ children }: Children): JSX.Element => {
  // Leva Controls.
  const {
    bevelSegments,
    creaseAngle,
    depth,
    height,
    radius,
    smoothness,
    width,
  } = useLeva();

  return (
    <RoundedBox
      args={[width, height, depth]}
      bevelSegments={bevelSegments}
      creaseAngle={creaseAngle}
      radius={radius}
      smoothness={smoothness}
    >
      {children ?? <Material />}
    </RoundedBox>
  );
};

export { Geometry3DRoundedBox as RoundedBox };
