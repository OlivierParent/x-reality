import { Navigate, Route, Routes, RoutesProps } from "react-router-dom";

import { NAVIGATION } from "Configs/navigation";
import { AnimatedCubePage } from "Pages/AnimatedCube";
import { AnimationPage } from "Pages/AnimationPage";
import { ButtonPage } from "Pages/ButtonPage";
import { ClockPage } from "Pages/ClockPage";
import { CompositionPage } from "Pages/CompositionPage";
import { GaugePage } from "Pages/GaugePage";
import { Geometry2dPage } from "Pages/Geometry2dPage";
import { Geometry3dPage } from "Pages/Geometry3dPage";
import { ImagePage } from "Pages/ImagePage";
import { LipsumPage } from "Pages/LipsumPage";
import { LogoPage } from "Pages/LogoPage";
import { NormalsPage } from "Pages/NormalsPage";
import { ParticlesPage } from "Pages/ParticlesPage";
import { SuzannePage } from "Pages/SuzannePage";
import { TexturePage } from "Pages/TexturePage";
import { TripodPage } from "Pages/TripodPage";

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
    <Routes {...props}>
      <Route element={<Navigate to={rootPath} />} path={allPath} />
      <Route element={<Navigate to={homePath} />} path={rootPath} />

      <Route
        element={<AnimatedCubePage />}
        path={NAVIGATION.PATH.ANIMATED_CUBE}
      />
      <Route element={<AnimationPage />} path={NAVIGATION.PATH.ANIMATION} />
      <Route element={<ButtonPage />} path={NAVIGATION.PATH.BUTTON} />
      <Route element={<ClockPage />} path={NAVIGATION.PATH.CLOCK} />
      <Route element={<CompositionPage />} path={NAVIGATION.PATH.COMPOSITION} />
      <Route element={<GaugePage />} path={NAVIGATION.PATH.GAUGE} />
      <Route element={<Geometry2dPage />} path={NAVIGATION.PATH.GEOMETRY_2D} />
      <Route element={<Geometry3dPage />} path={NAVIGATION.PATH.GEOMETRY_3D} />
      <Route element={<ImagePage />} path={NAVIGATION.PATH.IMAGE} />
      <Route element={<LipsumPage />} path={NAVIGATION.PATH.LIPSUM} />
      <Route element={<LogoPage />} path={NAVIGATION.PATH.LOGO} />
      <Route element={<NormalsPage />} path={NAVIGATION.PATH.NORMALS} />
      <Route element={<ParticlesPage />} path={NAVIGATION.PATH.PARTICLES} />
      <Route element={<SuzannePage />} path={NAVIGATION.PATH.SUZANNE} />
      <Route element={<TripodPage />} path={NAVIGATION.PATH.TRIPOD} />
      <Route element={<TexturePage />} path={NAVIGATION.PATH.TEXTURE} />
    </Routes>
  );
};

export { Pages };
