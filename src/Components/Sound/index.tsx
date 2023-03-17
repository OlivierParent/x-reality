import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";

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
