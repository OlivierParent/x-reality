import { Text3D } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

const d = new Date();
const dayName = d
  .toLocaleDateString(undefined, { weekday: "short" })
  .toUpperCase();
const dayNumber = d //
  .toLocaleDateString(undefined, { day: "2-digit" });
const fullYear = d //
  .getUTCFullYear();
const monthName = d
  .toLocaleDateString(undefined, { month: "long" })
  .toUpperCase();

const shadowProps = {
  castShadow: true,
  receiveShadow: true,
};

const textProps = {
  bevelEnabled: true,
  bevelOffset: 0,
  bevelSegments: 32,
  bevelSize: 0.025,
  bevelThickness: 0.025,
  curveSegments: 32,
  font: `${process.env.PUBLIC_URL}/fonts/Play_Bold.json`, // Convert fonts to JSON with https://gero3.github.io/facetype.js/
  // height: 5,
  size: 1,
  lineHeight: 0.5,
};

/**
 * Calendar.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Calendar = (props: GroupProps): JSX.Element => {
  return (
    <group name="Calendar" {...props}>
      <Text3D name="Month Name" {...shadowProps} {...textProps} size={1}>
        {monthName}
        <meshNormalMaterial />
      </Text3D>
      <Text3D
        name="Short Day Name"
        {...shadowProps}
        {...textProps}
        size={0.25}
        position={[-2, -1, 0]}
      >
        {dayName}
        <meshNormalMaterial />
      </Text3D>
      <Text3D
        name="Day Number"
        {...shadowProps}
        {...textProps}
        size={3}
        position={[-0, -3, 0]}
      >
        {dayNumber}
        <meshNormalMaterial />
      </Text3D>
      <Text3D
        name="Full Year"
        {...shadowProps}
        {...textProps}
        size={0.25}
        position={[0, -4, 0]}
      >
        {fullYear}
        <meshNormalMaterial />
      </Text3D>
    </group>
  );
};

export { Calendar };
