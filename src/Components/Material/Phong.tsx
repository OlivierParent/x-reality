import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialPhong as PhongMaterial } from "Settings/Leva/Material/Phong";

/**
 * A material for shiny surfaces with specular highlights.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial
 */
const MaterialPhong = (): JSX.Element => {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    opacity,
    shininess,
    side,
    specular,
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
          "Phong Material": folder(
            {
              color: PhongMaterial.color(),
              emissive: PhongMaterial.emissive(),
              emissiveIntensity: PhongMaterial.emissiveIntensity(),
              flatShading: PhongMaterial.flatShading(),
              shininess: PhongMaterial.shininess(),
              specular: PhongMaterial.specular(),
              wireframe: PhongMaterial.wireframe(),
            },
            Settings.folder(LEVA.ORDER.PHONG_MATERIAL)
          ),
        },
        Settings.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <meshPhongMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      opacity={opacity}
      shininess={shininess}
      side={side as Side}
      specular={specular}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialPhong as Phong };
