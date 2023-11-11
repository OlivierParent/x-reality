import { GroupProps } from "@react-three/fiber";

import { Sound as SoundGlobal } from "Components/Sound/Global";
import { Sound as SoundPositional } from "Components/Sound/Positional";
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
      <SoundGlobal position={[0, 0, -5]} />
      <SoundPositional />
      <Stairs />
    </group>
  );
};

export { RapierWorld };
