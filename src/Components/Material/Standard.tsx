import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";

/**
 * Standard Material.
 *
 * A standard physically based material, using Metallic-Roughness workflow.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial
 *
 * @returns {React.JSX.Element}
 */
const MaterialStandard = (): React.JSX.Element => {
  // Leva Controls.
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    metalness,
    opacity,
    roughness,
    side,
    transparent,
    wireframe,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder(
        {
          Material: folder(
            {
              dithering: Material.dithering(),
              opacity: Material.opacity(),
              side: Material.side(),
              transparent: Material.transparent(),
            },
            SettingsLeva.folder(LEVA.ORDER.MATERIAL)
          ),
          "Standard Material": folder(
            {
              color: StandardMaterial.color(),
              emissive: StandardMaterial.emissive(),
              emissiveIntensity: StandardMaterial.emissiveIntensity(),
              flatShading: StandardMaterial.flatShading(),
              metalness: StandardMaterial.metalness(),
              roughness: StandardMaterial.roughness(),
              wireframe: StandardMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.STANDARD_MATERIAL)
          ),
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <meshStandardMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      metalness={metalness}
      opacity={opacity}
      roughness={roughness}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialStandard as Material };
