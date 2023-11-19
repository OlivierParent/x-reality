import { GroupProps } from "@react-three/fiber";

import { Floor } from "Examples/Rapier/Diorama/Floor";
import { Wall } from "Examples/Rapier/Diorama/Wall";
import { Suzannes } from "Examples/Rapier/Diorama/Suzannes";

/**
 * Diorama.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierDiorama = (props: GroupProps): React.JSX.Element => {
  return (
    <group name="World" position={[0, -1.25, 0]} {...props}>
      <Floor />
      <Suzannes position={[0, 1, 0]} />
      <Wall //
        color="hsl(0, 100%, 70%)"
        position={[0, 0, -2.5]}
        rotation={[0, 0, 0]}
      />
      <Wall //
        color="hsl(240, 100%, 70%)"
        position={[2.5, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
};

export { RapierDiorama };
