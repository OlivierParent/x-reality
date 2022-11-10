import { GroupProps } from "@react-three/fiber";

import { CannonWorldBoxes as Boxes } from "Examples/Cannon/World/Boxes";
import { CannonWorldFloor as Floor } from "Examples/Cannon/World/Floor";
import { CannonWorldPlayer as Player } from "Examples/Cannon/World/Player";
import { CannonWorldStairs as Stairs } from "Examples/Cannon/World/Stairs";

const CannonWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props}>
      <Boxes />
      <Floor />
      <Player />
      <Stairs />
    </group>
  );
};

export { CannonWorld };
