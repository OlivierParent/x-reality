import { GroupProps } from "@react-three/fiber";

import { Logo } from "Components/Logo";
import { SceneLayout as Layout } from "Layouts/SceneLayout";

/**
 * Page for Logo.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const LogoPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Logo {...props} />
    </Layout>
  );
};

export { LogoPage };
