import { Sphere } from "@react-three/drei";
import { Attractor } from "@react-three/rapier-addons";
import { Vector3 } from "three";

const position = new Vector3(0, 0, -5);

const RapierPinballMachineAttractor = () => {
  return (
    <>
      <Attractor //
        // collisionGroups={ }
        // solverGroups={ }
        position={position}
        range={0.5}
        strength={0.02}
        type="linear"
      />
      <Sphere args={[0.1, 8, 8]} position={position} />
    </>
  );
};

export { RapierPinballMachineAttractor as Attractor };
