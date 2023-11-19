import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Lipsum as LipsumDefault } from "Components/Lipsum/Default";
import { Lipsum as LipsumFonts } from "Components/Lipsum/Fonts";

const LIPSUM = {
  Default: <LipsumDefault />,
  Fonts: <LipsumFonts />,
} as const;

/**
 * Lorem ipsum text.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Lipsum = (props: GroupProps): React.JSX.Element => {
  // Leva.
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
