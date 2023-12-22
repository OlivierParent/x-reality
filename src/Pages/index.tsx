import { Suspense } from "react";
import { Navigate, Route, Routes, RoutesProps } from "react-router-dom";

import { NAVIGATION } from "Configs/navigation";

/**
 * Router and pages.
 *
 * @param {RoutesProps} props
 * @returns {JSX.Element}
 */
const Pages = (props: RoutesProps): JSX.Element => {
  const allPath = "*";
  const homePath = NAVIGATION.PATH.CLOCK;
  const rootPath = "/";

  return (
    <Suspense>
      <Routes {...props}>
        <Route element={<Navigate to={rootPath} />} path={allPath} />
        <Route element={<Navigate to={homePath} />} path={rootPath} />
        {NAVIGATION.ITEMS.map(({ element, path }) => (
          <Route element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export { Pages };
