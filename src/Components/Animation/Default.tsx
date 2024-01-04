import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { AnimationMixer, Mesh } from "three";

import animationGlb from "Components/Animation/assets/animation.glb";

/**
 * Animation of a Cube.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Animation = (props: GroupProps): JSX.Element => {
  const { animations, scene }: any = useGLTF(animationGlb, true);
  const animationClip = animations[0];
  const animationMixer = useMemo(
    () => new AnimationMixer(animationClip),
    [animationClip]
  );

  // References.
  const animationRef = useRef<Mesh>(null!);

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
