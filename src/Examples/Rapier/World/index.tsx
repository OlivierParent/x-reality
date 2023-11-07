import { GroupProps } from "@react-three/fiber";

import { Sound } from "Components/Sound/Positional";
import { Floor } from "Examples/Rapier/World/Floor";
import { Obstacles } from "Examples/Rapier/World/Obstacles";
import { Player } from "Examples/Rapier/World/Player";
import { Stairs } from "Examples/Rapier/World/Stairs";

/**
 * World.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierWorld = (props: GroupProps): JSX.Element => {
  return (
    <group name="World" {...props}>
      <Floor />
      <Obstacles />
      <Player />
      <Sound />
      <Stairs />
    </group>
  );
};

export { RapierWorld };
