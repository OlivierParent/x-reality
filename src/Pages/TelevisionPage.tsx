import { GroupProps } from "@react-three/fiber";

import { Television } from "Components/Television";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Television.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const TelevisionPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Television {...props} />
    </Layout>
  );
};

export default TelevisionPage;
