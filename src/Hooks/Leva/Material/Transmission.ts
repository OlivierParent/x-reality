import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialTransmission as TransmissionMaterial } from "Settings/Leva/Material/Transmission";

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
              color: TransmissionMaterial.color(),
              emissive: TransmissionMaterial.emissive(),
              emissiveIntensity: TransmissionMaterial.emissiveIntensity(),
              flatShading: TransmissionMaterial.flatShading(),
              metalness: TransmissionMaterial.metalness(0.5),
              roughness: TransmissionMaterial.roughness(1.0),
              wireframe: TransmissionMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.STANDARD_MATERIAL)
          ),
          "Transmission Material": folder(
            {
              blur: TransmissionMaterial.blur(),
              depthScale: TransmissionMaterial.depthScale(),
              depthToBlurRatioBias: TransmissionMaterial.depthToBlurRatioBias(),
              distortion: TransmissionMaterial.distortion(),
              maxDepthThreshold: TransmissionMaterial.maxDepthThreshold(1),
              minDepthThreshold: TransmissionMaterial.minDepthThreshold(0.9),
              mirror: TransmissionMaterial.mirror(),
              mixBlur: TransmissionMaterial.mixBlur(),
              mixContrast: TransmissionMaterial.mixContrast(),
              mixStrength: TransmissionMaterial.mixStrength(2),
              reflectorOffset: TransmissionMaterial.reflectorOffset(),
              resolution: TransmissionMaterial.resolution(1024),
            },
            SettingsLeva.folder(LEVA.ORDER.DREI_TRANSMISSION_MATERIAL)
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
