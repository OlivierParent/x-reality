import { folder, useControls } from "leva";

import { SettingsLevaGeometryIcosahedron as IcosahedronGeometry } from "Settings/Leva/Geometry/Icosahedron";
import { SettingsLevaMaterialPoints as PointsMaterial } from "Settings/Leva/Material/Points";

/**
 * Particles.
 *
 * @returns {React.JSX.Element}
 */
const ParticlesDefault = (): React.JSX.Element => {
  const { color, detail, opacity, radius, size, sizeAttenuation, transparent } =
    useControls("Components", {
      "Icosahedron (20 faces)": folder({
        detail: IcosahedronGeometry.detail(3),
        radius: IcosahedronGeometry.radius(2),
      }),
      "Points Material": folder({
        color: PointsMaterial.color(),
        opacity: PointsMaterial.opacity(),
        size: PointsMaterial.size(),
        sizeAttenuation: PointsMaterial.sizeAttenuation(),
        transparent: PointsMaterial.transparent(),
      }),
    });

  return (
    <points>
      <icosahedronGeometry args={[radius, detail]} />
      <pointsMaterial
        color={color}
        opacity={opacity}
        size={size}
        sizeAttenuation={sizeAttenuation}
        transparent={transparent}
      />
    </points>
  );
};

export { ParticlesDefault as Particles };
