import { Box, useMatcapTexture } from "@react-three/drei";
import { RigidBody, interactionGroups } from "@react-three/rapier";
import { Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";
import { Plunger } from "Examples/Rapier/PinballMachine/Plunger";
import { PLUNGER_ASSEMBLY } from "Examples/Rapier/PinballMachine/PlungerAssembly.config";
import { MATCAP } from "Libs/matcap";

type PlungerProps = {
  position: Vector3;
};

/**
 * Pinball machine plunger assembly.
 *
 * @param {BumperProps} props
 * @returns {JSX.Element}
 */
const RapierPinballMachinePlungerAssembly = (
  props: PlungerProps
): JSX.Element => {
  // Matcap Textures.
  const [titaniumMatcapTexture] = useMatcapTexture(
    MATCAP.ID.TITANIUM, //
    MATCAP.SIZE.XL
  );

  const { position } = props;

  return (
    <group name="Plunger Assembly" position={position}>
      <RigidBody
        collisionGroups={interactionGroups(INTERACTION.WALL, [
          INTERACTION.BALL,
        ])}
        name="Wall"
        solverGroups={interactionGroups(INTERACTION.WALL, [
          INTERACTION.BALL, //
        ])}
        type="fixed"
      >
        <Box
          args={[
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.LENGTH,
          ]}
          position={[
            -(PLUNGER_ASSEMBLY.RAIL.DIAMETER + 0.01),
            PLUNGER_ASSEMBLY.RAIL.DIAMETER / 2,
            0,
          ]}
        >
          <meshMatcapMaterial matcap={titaniumMatcapTexture} />
        </Box>
        <Box
          args={[
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.LENGTH,
          ]}
          position={[
            PLUNGER_ASSEMBLY.RAIL.DIAMETER + 0.01,
            PLUNGER_ASSEMBLY.RAIL.DIAMETER / 2,
            0,
          ]}
        >
          <meshMatcapMaterial matcap={titaniumMatcapTexture} />
        </Box>
      </RigidBody>

      <Plunger position={new Vector3(0, 0.1, 0)} />
    </group>
  );
};

export { RapierPinballMachinePlungerAssembly as PlungerAssembly };
