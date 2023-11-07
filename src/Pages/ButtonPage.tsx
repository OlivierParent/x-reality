import { GroupProps } from "@react-three/fiber";

import { Button } from "Components/Button";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Button.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const ButtonPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Button {...props} />
    </Layout>
  );
};

export { ButtonPage };
