import { GroupProps } from "@react-three/fiber";

import { RapierWorldFloor as Floor } from "Examples/Rapier/World/Floor";
import { RapierWorldPlayer as Player } from "Examples/Rapier/World/Player";
import { RapierWorldStairs as Stairs } from "Examples/Rapier/World/Stairs";

const RapierWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props}>
      <Floor />
      <Player />
      <Stairs />
    </group>
  );
};

export { RapierWorld };
