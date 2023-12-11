import { GroupProps } from "@react-three/fiber";

import { Lipsum as LipsumDefault } from "Components/Lipsum/Default";
import { Lipsum as LipsumFonts } from "Components/Lipsum/Fonts";
import { useLeva } from "Hooks/Leva/Lipsum";

const LEVA_OPTIONS = {
  "\u2014Default\u2014": <LipsumDefault />,
  "Fonts\u0000": <LipsumFonts />,
} as const;

/**
 * Lorem ipsum text.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Lipsum = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { lipsum } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS["\u2014Default\u2014"]);

  return (
    <group name="Lipsum" {...props}>
      {lipsum}
    </group>
  );
};

export { Lipsum };
