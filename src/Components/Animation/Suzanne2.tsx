import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { AnimationMixer, Mesh } from "three";

import animationGlb from "Components/Animation/assets/animation2.glb";
import suzanneGlb from "Components/Suzanne/assets/suzanne_default_smooth_shading_compressed.glb";

/**
 * Animation of a Cube replaced with Suzanne.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Animation = (props: GroupProps): JSX.Element => {
  const { animations, scene }: any = useGLTF(animationGlb, true);
  const { scene: sceneSuzanne }: any = useGLTF(suzanneGlb, true);
  const animationClip = animations[0];
  const animationMixer = useMemo(
    () => new AnimationMixer(animationClip),
    [animationClip]
  );

  console.log("scene", scene.children[0]);

  // References.
  const animationRef = useRef<Mesh>(null!);

  useLayoutEffect(() => {
    scene.children[0] = sceneSuzanne.children[0];
  }, [scene.children, sceneSuzanne.children]);

  useEffect(() => {
    animationMixer.clipAction(animationClip, animationRef.current).play();
  }, [animationClip, animationMixer]);

  useFrame((state, delta) => {
    animationMixer.update(delta);
  });

  return (
    <group name="Animation" {...props}>
      <primitive object={scene} ref={animationRef} />;
    </group>
  );
};

export { Animation };
