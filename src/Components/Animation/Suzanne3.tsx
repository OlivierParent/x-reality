import { ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { AnimationMixer, Mesh } from "three";

import animationGlb from "Components/Animation/assets/animation2.glb";
import suzanneGlb from "Components/Suzanne/assets/suzanne_default_smooth_shading_compressed.glb";

/**
 * Animation of a Suzanne replaced with another Suzanne.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Animation = (props: GroupProps): JSX.Element => {
  const scrollData = useScroll();

  const { animations, scene }: any = useGLTF(animationGlb, true);
  const { scene: sceneSuzanne }: any = useGLTF(suzanneGlb, true);
  const animationClip = animations[0];
  const animationMixer = useMemo(
    () => new AnimationMixer(animationClip),
    [animationClip]
  );

  // References.
  const animationRef = useRef<Mesh>(null!);

  useLayoutEffect(() => {
    scene.children[0] = sceneSuzanne.children[0];
  }, [scene.children, sceneSuzanne.children]);

  useEffect(() => {
    animationMixer.clipAction(animationClip, animationRef.current).play();
    console.log("animationClip", animationClip);
    console.log("animationMixer", animationMixer);
  }, [animationClip, animationMixer]);

  useFrame((state, delta) => {
    animationMixer.setTime(animationClip.duration * scrollData.offset);
  });

  return (
    <group name="Animation" {...props}>
      <ScrollControls>
        <primitive object={scene} ref={animationRef} />;
      </ScrollControls>
    </group>
  );
};

const AnimationScrollWrapper = (props: GroupProps): JSX.Element => {
  return (
    <ScrollControls>
      <Animation {...props} />
    </ScrollControls>
  );
};

export { AnimationScrollWrapper as Animation };
