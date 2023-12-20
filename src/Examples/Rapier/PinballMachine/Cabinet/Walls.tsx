import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody, interactionGroups } from "@react-three/rapier";
import { INTERACTION } from "Configs/interaction";
import { MeshBasicMaterial, Vector3 } from "three";

const WALL = {
  THICKNESS: 0.25,
  HEIGHT: 0.3,
} as const;

const materialLeft = new MeshBasicMaterial();
const materialMiddle = new MeshBasicMaterial();
const materialRight = new MeshBasicMaterial();

materialLeft.color.setHSL(0 / 3, 1, 0.5);
materialMiddle.color.setHSL(2 / 3, 1, 0.5);
materialRight.color.setHSL(1 / 3, 1, 0.5);

/**
 * Pinball machine cabinet walls.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachineCabinetWalls = (
  props: GroupProps
): React.JSX.Element => {
  return (
    <group name="Cabinet Walls" {...props}>
      <RigidBody //
        collisionGroups={interactionGroups(INTERACTION.WALL, [
          INTERACTION.BALL,
        ])}
        restitution={0.25}
        friction={0.5}
        solverGroups={interactionGroups(INTERACTION.WALL, [
          INTERACTION.BALL, //
        ])}
        type="fixed"
      >
        <Box //
          args={[10, WALL.HEIGHT, WALL.THICKNESS]}
          material={materialMiddle}
          name="Side Wall Top"
          position={new Vector3(0, WALL.HEIGHT / 2, -14)}
        />
        <Box //
          args={[16, WALL.HEIGHT, WALL.THICKNESS]}
          material={materialLeft}
          name="Side Wall Left"
          position={new Vector3(-5, WALL.HEIGHT / 2, -6)}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Box //
          args={[16, WALL.HEIGHT, WALL.THICKNESS]}
          material={materialRight}
          name="Side Wall Right"
          position={new Vector3(5, WALL.HEIGHT / 2, -6)}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <Box //
          args={[3.5, WALL.HEIGHT, WALL.THICKNESS]}
          material={materialLeft}
          name="Side Wall Bottom Left"
          position={new Vector3(-2.6, WALL.HEIGHT / 2, -0.6)}
          rotation={[0, -Math.PI / 9, 0]}
        />
        <Box //
          args={[3.5, WALL.HEIGHT, WALL.THICKNESS]}
          material={materialRight}
          name="Side Wall Bottom Right"
          position={new Vector3(2.6, WALL.HEIGHT / 2, -0.6)}
          rotation={[0, Math.PI / 9, 0]}
        />
      </RigidBody>
    </group>
  );
};

export { RapierPinballMachineCabinetWalls as CabinetWalls };
