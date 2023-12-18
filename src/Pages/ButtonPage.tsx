import { GroupProps } from "@react-three/fiber";

import { Button } from "Components/Button";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Button.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ButtonPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Button {...props} />
    </Layout>
  );
};

export default ButtonPage;
