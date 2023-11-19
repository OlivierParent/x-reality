import { Vector3 } from "three";

type PlungerProps = {
  position: Vector3;
};

/**
 * Pinball machine plunger.
 *
 * @param {BumperProps} props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachinePlunger = (
  props: PlungerProps
): React.JSX.Element => {
  const { position = new Vector3(0, 0, 0) } = props;

  return <group name="Plunger" position={position}></group>;
};

export { RapierPinballMachinePlunger as Plunger };
