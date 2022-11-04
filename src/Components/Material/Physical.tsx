import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialPhysical as PhysicalMaterial } from "Settings/Leva/Material/Physical";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";

/**
 * An extension of the MeshStandardMaterial, providing more advanced physically-based rendering properties.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial
 */
const MaterialPhysical = (): JSX.Element => {
  const {
    clearcoat,
    clearcoatRoughness,
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    ior,
    metalness,
    opacity,
    reflectivity,
    roughness,
    sheen,
    sheenColor,
    sheenRoughness,
    side,
    thickness,
    transmission,
    transparent,
    wireframe,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder({
        Material: folder({
          dithering: Material.dithering(),
          opacity: Material.opacity(),
          side: Material.side(),
          transparent: Material.transparent(),
        }),
        "Standard Material": folder({
          color: StandardMaterial.color(),
          emissive: StandardMaterial.emissive(),
          emissiveIntensity: StandardMaterial.emissiveIntensity(),
          flatShading: StandardMaterial.flatShading(),
          metalness: StandardMaterial.metalness(),
          roughness: StandardMaterial.roughness(),
          wireframe: StandardMaterial.wireframe(),
        }),
        "Physical Material": folder({
          clearcoat: PhysicalMaterial.clearcoat(),
          clearcoatRoughness: PhysicalMaterial.clearcoatRoughness(),
          ior: PhysicalMaterial.ior(),
          reflectivity: PhysicalMaterial.reflectivity(),
          sheen: PhysicalMaterial.sheen(),
          sheenColor: PhysicalMaterial.sheenColor(),
          sheenRoughness: PhysicalMaterial.sheenRoughness(),
          thickness: PhysicalMaterial.thickness(),
          transmission: PhysicalMaterial.transmission(),
        }),
      }),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
  );

  return (
    <meshPhysicalMaterial
      clearcoat={clearcoat}
      clearcoatRoughness={clearcoatRoughness}
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      ior={ior}
      metalness={metalness}
      opacity={opacity}
      reflectivity={reflectivity}
      roughness={roughness}
      sheen={sheen}
      sheenColor={sheenColor}
      sheenRoughness={sheenRoughness}
      side={side as Side}
      thickness={thickness}
      transmission={transmission}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialPhysical as Physical };
