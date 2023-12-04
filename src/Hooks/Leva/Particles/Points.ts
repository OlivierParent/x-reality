import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLevaGeometryIcosahedron as Geometry } from "Settings/Leva/Geometry/Icosahedron";
import { SettingsLevaMaterialPoints as Material } from "Settings/Leva/Material/Points";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    color, //
    detail,
    opacity,
    radius,
    size,
    sizeAttenuation,
    transparent,
  } = useControls(LEVA.SCHEMA.COMPONENTS, {
    "Icosahedron (20 faces)": folder({
      detail: Geometry.detail(3),
      radius: Geometry.radius(2),
    }),
    "Points Material": folder({
      color: Material.color(),
      opacity: Material.opacity(),
      size: Material.size(),
      sizeAttenuation: Material.sizeAttenuation(),
      transparent: Material.transparent(),
    }),
  });

  return {
    color,
    detail,
    opacity,
    radius,
    size,
    sizeAttenuation,
    transparent,
  };
}

export { useLeva };
