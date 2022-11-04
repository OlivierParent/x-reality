import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { LipsumDefault as Default } from "Components/Lipsum/Default";
import { LipsumFonts as Fonts } from "Components/Lipsum/Fonts";

const LIPSUM = Object.freeze({
  Default: "Default",
  Fonts: "Fonts",
});

const Lipsum = (props: GroupProps) => {
  const { useLipsum } = useControls("Components", {
    useLipsum: {
      label: "Lipsum",
      options: LIPSUM,
      value: LIPSUM.Default,
    },
  });

  function enableLipsum(name: string, element: JSX.Element) {
    return useLipsum === name ? element : null;
  }

  return (
    <group name="Lipsum" {...props}>
      {enableLipsum(LIPSUM.Default, <Default />)}
      {enableLipsum(LIPSUM.Fonts, <Fonts />)}
    </group>
  );
};

export { Lipsum };
