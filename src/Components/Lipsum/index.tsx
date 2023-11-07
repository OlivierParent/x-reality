import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Lipsum as LipsumDefault } from "Components/Lipsum/Default";
import { Lipsum as LipsumFonts } from "Components/Lipsum/Fonts";

const LIPSUM = Object.freeze({
  Default: <LipsumDefault />,
  Fonts: <LipsumFonts />,
});

const Lipsum = (props: GroupProps) => {
  const { lipsum } = useControls("Components", {
    lipsum: {
      label: "Lipsum",
      options: LIPSUM,
      value: LIPSUM.Default,
    },
  });

  return (
    <group name="Lipsum" {...props}>
      {lipsum}
    </group>
  );
};

export { Lipsum };
