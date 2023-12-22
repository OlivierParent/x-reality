import { GroupProps } from "@react-three/fiber";

/**
 * Sound.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Sound = (props: GroupProps): JSX.Element => {
  return <group {...props}></group>;
};

export { Sound };
