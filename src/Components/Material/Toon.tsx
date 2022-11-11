import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialToon as ToonMaterial } from "Settings/Leva/Material/Toon";

/**
 * A material implementing toon shading.
 *
 * @see https://threejs.org/docs/index.html?q=toon#api/en/materials/MeshToonMaterial
 */
const MaterialToon = (): JSX.Element => {
  const {
    color,
    emissive,
    emissiveIntensity,
    opacity,
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
            Settings.folder(LEVA.ORDER.MATERIAL)
          ),
          "Toon Material": folder(
            {
              color: ToonMaterial.color(),
              emissive: ToonMaterial.emissive(),
              emissiveIntensity: ToonMaterial.emissiveIntensity(),
              wireframe: ToonMaterial.wireframe(),
            },
            Settings.folder(LEVA.ORDER.TOON_MATERIAL)
          ),
        },
        Settings.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <meshToonMaterial
      color={color}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialToon as Toon };
