import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { AnimationMixer, Mesh } from "three";

import animationGlb from "Components/Animation/assets/animation.glb";

const Animation = (props: GroupProps) => {
  const { animations, scene }: any = useGLTF(animationGlb, true);
  const animationClip = animations[0];
  const animationRef = useRef<Mesh>(null!);
  const mixer = useMemo(
    () => new AnimationMixer(animationClip),
    [animationClip]
  );

  useEffect(() => {
    mixer.clipAction(animationClip, animationRef.current).play();
  }, [animationClip, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group name="Animation" {...props}>
      <primitive object={scene} ref={animationRef} />;
    </group>
  );
};

export { Animation };
