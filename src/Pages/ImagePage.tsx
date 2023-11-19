import { GroupProps } from "@react-three/fiber";

import { Image } from "Components/Image";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Image.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ImagePage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Image {...props} />
    </Layout>
  );
};

export { ImagePage };
