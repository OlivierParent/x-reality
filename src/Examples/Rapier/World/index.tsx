import { GroupProps } from "@react-three/fiber";

import { Sound as SoundGlobal } from "Components/Sound/Global";
import { Sound as SoundPositional } from "Components/Sound/Positional";
import {
  cursorActiveHandler,
  cursorInactiveHandler,
} from "Components/UserInterface/CursorOverlay";
import { Floor } from "Examples/Rapier/World/Floor";
import { Obstacles } from "Examples/Rapier/World/Obstacles";
import { Player } from "Examples/Rapier/World/Player";
import { Stairs } from "Examples/Rapier/World/Stairs";

/**
 * World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierWorld = (props: GroupProps): React.JSX.Element => {
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

export { RapierWorld };
