import { useControls } from "leva";

import { LogoDefault as Default } from "Components/Logo/Default";
import { LogoDouble as Double } from "Components/Logo/Double";

const LOGO = Object.freeze({
  Default: "Default",
  Double: "Double",
});

const Logo = () => {
  const { useLogo } = useControls("Components", {
    useLogo: {
      label: "Logo",
      options: LOGO,
      value: LOGO.Default,
    },
  });

  function enableLogo(name: string, element: JSX.Element) {
    return useLogo === name ? element : null;
  }

  return (
    <group name="Logos">
      {enableLogo(LOGO.Default, <Default />)}
      {enableLogo(LOGO.Double, <Double />)}
    </group>
  );
};

export { Logo };
