import { useTexture } from "@react-three/drei";
import { folder, useControls } from "leva";

import { SettingsLevaGeometryIcosahedron as IcosahedronGeometry } from "Settings/Leva/Geometry/Icosahedron";
import { SettingsLevaMaterialPoints as PointsMaterial } from "Settings/Leva/Material/Points";

import particleImage from "Components/Particles/assets/Arteveldehogeschool_favicon.png";

/**
 * Particles with sprites.
 *
 * @returns {React.JSX.Element}
 */
const ParticlesSprites = (): React.JSX.Element => {
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

  const sprite = useTexture(particleImage);

  return (
    <points>
      <icosahedronGeometry args={[radius, detail]} />
      <pointsMaterial
        color={color}
        map={sprite}
        opacity={opacity}
        size={size}
        sizeAttenuation={sizeAttenuation}
        transparent={transparent}
      />
    </points>
  );
};

export { ParticlesSprites as Particles };
