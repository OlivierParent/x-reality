import preval from "preval.macro";

import packageJson from "../../../package.json";

const buildStamp = preval`
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, "0");
  const DD = date.getDate().toString().padStart(2, "0");
  const hh = date.getHours().toString().padStart(2, "0");
  const mm = date.getMinutes().toString().padStart(2, "0");
  const ss = date.getSeconds().toString().padStart(2, "0");
  module.exports = YYYY + MM + DD +"."+ hh + mm + ss;
`;

const UserInterfaceBuildStamp = () => {
  return (
    <>
      v{packageJson.version}.{buildStamp}
    </>
  );
};

export { UserInterfaceBuildStamp as BuildStamp };
