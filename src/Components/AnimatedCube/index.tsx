import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Default } from "Components/AnimatedCube/Default";
import { GreenSock } from "Components/AnimatedCube/GreenSock";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const ANIMATED_CUBE = Object.freeze({
  Default: <Default />,
  GreenSock: <GreenSock />,
});

const AnimatedCube = (props: GroupProps): JSX.Element => {
  const { cube } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      cube: {
        label: "Animated Cube",
        options: ANIMATED_CUBE,
        value: ANIMATED_CUBE.GreenSock,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <group name="Animated Cube" {...props}>
      {cube}
    </group>
  );
};

export { AnimatedCube };
