import { MeshReflectorMaterial } from "@react-three/drei";
import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialReflector as ReflectorMaterial } from "Settings/Leva/Material/Reflector";

/**
 * Reflector Material.
 *
 * An extension of the MeshStandardMaterial, to easily add reflections and/or blur.
 *
 * @see https://drei.pmnd.rs/?path=/story/shaders-meshreflectormaterial--reflector-st
 */
const MaterialReflector = (): React.JSX.Element => {
  // Leva Controls.
  const {
    blur,
    color,
    depthScale,
    depthToBlurRatioBias,
    distortion,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    maxDepthThreshold,
    metalness,
    minDepthThreshold,
    mirror,
    mixBlur,
    mixContrast,
    mixStrength,
    opacity,
    reflectorOffset,
    resolution,
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
              color: ReflectorMaterial.color(),
              emissive: ReflectorMaterial.emissive(),
              emissiveIntensity: ReflectorMaterial.emissiveIntensity(),
              flatShading: ReflectorMaterial.flatShading(),
              metalness: ReflectorMaterial.metalness(0.5),
              roughness: ReflectorMaterial.roughness(1.0),
              wireframe: ReflectorMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.STANDARD_MATERIAL)
          ),
          "Reflector Material": folder(
            {
              blur: ReflectorMaterial.blur(),
              depthScale: ReflectorMaterial.depthScale(),
              depthToBlurRatioBias: ReflectorMaterial.depthToBlurRatioBias(),
              distortion: ReflectorMaterial.distortion(),
              maxDepthThreshold: ReflectorMaterial.maxDepthThreshold(1),
              minDepthThreshold: ReflectorMaterial.minDepthThreshold(0.9),
              mirror: ReflectorMaterial.mirror(),
              mixBlur: ReflectorMaterial.mixBlur(),
              mixContrast: ReflectorMaterial.mixContrast(),
              mixStrength: ReflectorMaterial.mixStrength(2),
              reflectorOffset: ReflectorMaterial.reflectorOffset(),
              resolution: ReflectorMaterial.resolution(1024),
            },
            SettingsLeva.folder(LEVA.ORDER.REFLECTOR_MATERIAL)
          ),
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <MeshReflectorMaterial
      blur={blur}
      color={color}
      depthScale={depthScale}
      depthToBlurRatioBias={depthToBlurRatioBias}
      distortion={distortion}
      distortionMap={undefined}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      maxDepthThreshold={maxDepthThreshold}
      metalness={metalness}
      minDepthThreshold={minDepthThreshold}
      mirror={mirror}
      mixBlur={mixBlur}
      mixContrast={mixContrast}
      mixStrength={mixStrength}
      opacity={opacity}
      reflectorOffset={reflectorOffset}
      resolution={resolution}
      roughness={roughness}
      side={side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialReflector as Material };
