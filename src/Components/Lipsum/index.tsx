import { GroupProps } from "@react-three/fiber";

import { Lipsum as LipsumDefault } from "Components/Lipsum/Default";
import { Lipsum as LipsumFonts } from "Components/Lipsum/Fonts";
import { useLeva } from "Hooks/Leva/Lipsum";

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
  // Leva Controls.
  const { lipsum } = useLeva(LIPSUM);

  return (
    <group name="Lipsum" {...props}>
      {lipsum}
    </group>
  );
};

export { Lipsum };
