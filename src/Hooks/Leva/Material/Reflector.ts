import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialReflector as ReflectorMaterial } from "Settings/Leva/Material/Reflector";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
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

  return {
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
  };
}

export { useLeva };
