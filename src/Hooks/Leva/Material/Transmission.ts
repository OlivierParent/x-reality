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
    anisotropicBlur,
    anisotropy,
    chromaticAberration,
    color,
    distortion,
    distortionScale,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    metalness,
    opacity,
    resolution,
    roughness,
    samples,
    side,
    temporalDistortion,
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
          "Physical Material": folder(
            {
              thickness: TransmissionMaterial.thickness(),
              transmission: TransmissionMaterial.transmission(),
            },
            SettingsLeva.folder(LEVA.ORDER.PHYSICAL_MATERIAL)
          ),
          "Transmission Material": folder(
            {
              anisotropicBlur: TransmissionMaterial.anisotropicBlur(1),
              anisotropy: TransmissionMaterial.anisotropy(),
              chromaticAberration: TransmissionMaterial.chromaticAberration(),
              distortion: TransmissionMaterial.distortion(),
              distortionScale: TransmissionMaterial.distortionScale(),
              resolution: TransmissionMaterial.resolution(1024),
              samples: TransmissionMaterial.samples(),
              temporalDistortion: TransmissionMaterial.temporalDistortion(),
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
    anisotropicBlur,
    anisotropy,
    chromaticAberration,
    color,
    distortion,
    distortionScale,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    metalness,
    opacity,
    resolution,
    roughness,
    samples,
    side,
    temporalDistortion,
    transparent,
    wireframe,
  };
}

export { useLeva };
