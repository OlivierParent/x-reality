import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";
import { SettingsLevaMaterialPhysical as PhysicalMaterial } from "Settings/Leva/Material/Physical";

const MaterialPhysicalFrostedGlass = (): JSX.Element => {
  const { roughness, thickness, transmission } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      "Physical Material (Frosted Glass)": folder({
        roughness: StandardMaterial.roughness(0.5),
        thickness: PhysicalMaterial.thickness(0.7),
        transmission: PhysicalMaterial.transmission(1.0),
      }),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
  );

  return (
    <meshPhysicalMaterial
      roughness={roughness}
      thickness={thickness}
      transmission={transmission}
    />
  );
};

export { MaterialPhysicalFrostedGlass as PhysicalFrostedGlass };
