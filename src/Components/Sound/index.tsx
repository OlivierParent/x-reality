import { GroupProps } from "@react-three/fiber";

/**
 * Sound.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Sound = (props: GroupProps): React.JSX.Element => {
  return <group {...props}></group>;
};

export { Sound };
