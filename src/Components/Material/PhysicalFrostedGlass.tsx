import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterialPhysical as PhysicalMaterial } from "Settings/Leva/Material/Physical";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";

/**
 * Physically-based Material to simulate frosted glass.
 *
 * @returns {React.JSX.Element}
 */
const MaterialPhysicalFrostedGlass = (): React.JSX.Element => {
  // Leva Controls.
  const { roughness, thickness, transmission } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      "Physical Material (Frosted Glass)": folder({
        roughness: StandardMaterial.roughness(0.5),
        thickness: PhysicalMaterial.thickness(0.7),
        transmission: PhysicalMaterial.transmission(1.0),
      }),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <meshPhysicalMaterial
      roughness={roughness}
      thickness={thickness}
      transmission={transmission}
    />
  );
};

export { MaterialPhysicalFrostedGlass as Material };
