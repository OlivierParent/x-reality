import { GroupProps } from "@react-three/fiber";

import { Painting } from "Components/Painting";
import { SuzanneFrostedGlass } from "Components/Suzanne/FrostedGlass";

const Composition = (props: GroupProps) => {
  return (
    <group {...props}>
      <Painting position={[0, 0, -1]} />
      <SuzanneFrostedGlass position={[0, 0, 1]} />
    </group>
  );
};

export { Composition };
