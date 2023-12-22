import { GroupProps } from "@react-three/fiber";

import { Sound as SoundGlobal } from "Components/Sound/Global";
import { Sound as SoundPositional } from "Components/Sound/Positional";
import {
  cursorActiveHandler,
  cursorInactiveHandler,
} from "Components/UserInterface/CursorOverlay";
import { Floor } from "Examples/Cannon/World/Floor";
import { Obstacles } from "Examples/Cannon/World/Obstacles";
import { Player } from "Examples/Cannon/World/Player";
import { Stairs } from "Examples/Cannon/World/Stairs";

/**
 * World.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const CannonWorld = (props: GroupProps): JSX.Element => {
  return (
    <group name="World" {...props}>
      <Floor />
      <Obstacles />
      <Player />
      <SoundGlobal
        onPointerEnter={cursorActiveHandler}
        onPointerLeave={cursorInactiveHandler}
        position={[0, 0, -5]}
      />
      <SoundPositional
        onPointerEnter={cursorActiveHandler}
        onPointerLeave={cursorInactiveHandler}
      />
      <Stairs />
    </group>
  );
};

export { CannonWorld };
