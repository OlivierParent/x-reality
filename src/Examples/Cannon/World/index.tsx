import { GroupProps } from "@react-three/fiber";

import { CannonWorldFloor as Floor } from "Examples/Cannon/World/Floor";
import { CannonWorldObstacles as Obstacles } from "Examples/Cannon/World/Obstacles";
import { CannonWorldPlayer as Player } from "Examples/Cannon/World/Player";
import { CannonWorldStairs as Stairs } from "Examples/Cannon/World/Stairs";

const CannonWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props}>
      <Floor />
      <Obstacles />
      <Player />
      <Stairs />
    </group>
  );
};

export { CannonWorld };
