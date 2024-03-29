import { Text, useMatcapTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { FONT_FAMILY } from "Libs/font";
import { MATCAP } from "Libs/matcap";

/**
 * Lorem ipsum text.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const LipsumDefault = (props: GroupProps): JSX.Element => {
  // Leva Controls.
  const {
    size, //
    string,
  } = useControls(LEVA.SCHEMA.COMPONENTS, {
    size: {
      label: "Size",
      max: 1.0,
      min: 0.1,
      value: 0.5,
    },
    string: {
      label: "String",
      value: "Lorem ipsum dolor sit amet.",
    },
  });

  // Matcap Textures.
  const [greenCrystalMatcapTexture] = useMatcapTexture(
    MATCAP.ID.GREEN_CRYSTAL, //
    MATCAP.SIZE.XL
  );
  const [silveryMatcapTexture] = useMatcapTexture(
    MATCAP.ID.SILVERY, //
    MATCAP.SIZE.XL
  );
  const [titaniumMatcapTexture] = useMatcapTexture(
    MATCAP.ID.TITANIUM, //
    MATCAP.SIZE.XL
  );

  return (
    <group name="Default Lipsum" {...props}>
      <Text fontSize={size} position={[0, 1.5, -0.2]}>
        {string}
        <meshLambertMaterial />
      </Text>
      <Text
        font={FONT_FAMILY.ROBOTO_SLAB.url}
        fontSize={size}
        position={[0, 0.5, 0]}
      >
        {string}
        <meshMatcapMaterial matcap={titaniumMatcapTexture} />
      </Text>
      <Text
        font={FONT_FAMILY.ARCHITECTS_DAUGHTER.url}
        fontSize={size}
        position={[0, -0.5, 0.1]}
      >
        {string}
        <meshMatcapMaterial matcap={greenCrystalMatcapTexture} opacity={0.5} />
      </Text>
      <Text
        color={0x000000}
        font={FONT_FAMILY.PRESS_START_2P.url}
        fontSize={size}
        outlineColor={0x00ff00}
        outlineWidth={0.04}
        position={[0, -1.5, 0.2]}
      >
        {string}
        <meshMatcapMaterial matcap={silveryMatcapTexture} opacity={0.9} />
      </Text>
    </group>
  );
};

export { LipsumDefault as Lipsum };
