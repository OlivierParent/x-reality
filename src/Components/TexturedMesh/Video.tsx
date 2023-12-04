import { Plane, useVideoTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import videoByRickyEsquivel from "Components/TexturedMesh/assets/Video_by_Ricky_Esquivel.mp4";

const ASPECT_RATIO = 16 / 9;
const SIZE = 3;

const width = SIZE * ASPECT_RATIO;
const height = SIZE;

/**
 * Mesh with Video Texture.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const TexturedMeshVideo = (props: GroupProps): React.JSX.Element => {
  const videoTexture = useVideoTexture(videoByRickyEsquivel, {
    unsuspend: "canplay",
    crossOrigin: "Anonymous",
    muted: false, // Sound is only allowed after a user action.
    loop: true,
    start: true,
  });

  return (
    <group name="Mesh with Video Texture" {...props}>
      <Plane //
        args={[width, height]}
      >
        <meshBasicMaterial //
          color={0xffffff}
          map={videoTexture}
          toneMapped={false}
        />
      </Plane>
    </group>
  );
};

export { TexturedMeshVideo as TexturedMesh };
