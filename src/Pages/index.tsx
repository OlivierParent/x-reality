import { Navigate, Route, Routes, RoutesProps } from "react-router-dom";

import { NAVIGATION } from "Configs/navigation";
import { AnimatedCubePage } from "Pages/AnimatedCube";
import { AnimationPage } from "Pages/AnimationPage";
import { ButtonPage } from "Pages/ButtonPage";
import { CalendarPage } from "Pages/CalendarPage";
import { ClockPage } from "Pages/ClockPage";
import { CompositionPage } from "Pages/CompositionPage";
import { GaugeClusterPage } from "Pages/GaugeClusterPage";
import { Geometry2dPage } from "Pages/Geometry2dPage";
import { Geometry3dPage } from "Pages/Geometry3dPage";
import { ImagePage } from "Pages/ImagePage";
import { LipsumPage } from "Pages/LipsumPage";
import { LogoPage } from "Pages/LogoPage";
import { NormalsPage } from "Pages/NormalsPage";
import { ParticlesPage } from "Pages/ParticlesPage";
import { PhysicsCannonTestPage } from "Pages/PhysicsCannonTestPage";
import { PhysicsCannonWorldPage } from "Pages/PhysicsCannonWorldPage";
import { PhysicsRapierCollidersAutoPage } from "Pages/PhysicsRapierCollidersAutoPage";
import { PhysicsRapierCollidersManualPage } from "Pages/PhysicsRapierCollidersManualPage";
import { PhysicsRapierDioramaPage } from "Pages/PhysicsRapierDioramaPage";
import { PhysicsRapierPinballMachinePage } from "Pages/PhysicsRapierPinballMachinePage";
import { PhysicsRapierTestPage } from "Pages/PhysicsRapierTestPage";
import { PhysicsRapierWorldPage } from "Pages/PhysicsRapierWorldPage";
import { SuzanneExportsPage } from "Pages/SuzanneExportsPage";
import { SuzannePage } from "Pages/SuzannePage";
import { TexturePage } from "Pages/TexturePage";
import { TripodPage } from "Pages/TripodPage";

/**
 * Router and pages.
 *
 * @param {RoutesProps} props
 * @returns {React.JSX.Element}
 */
const Pages = (props: RoutesProps): React.JSX.Element => {
  const allPath = "*";
  const homePath = NAVIGATION.PATH.CLOCK;
  const rootPath = "/";

  return (
    <Routes {...props}>
      <Route //
        element={<Navigate to={rootPath} />}
        path={allPath}
      />
      <Route //
        element={<Navigate to={homePath} />}
        path={rootPath}
      />

      <Route //
        element={<AnimatedCubePage />}
        path={NAVIGATION.PATH.ANIMATED_CUBE}
      />
      <Route //
        element={<AnimationPage />}
        path={NAVIGATION.PATH.ANIMATION}
      />
      <Route //
        element={<ButtonPage />}
        path={NAVIGATION.PATH.BUTTON}
      />
      <Route //
        element={<CalendarPage />}
        path={NAVIGATION.PATH.CALENDAR}
      />
      <Route //
        element={<ClockPage />}
        path={NAVIGATION.PATH.CLOCK}
      />
      <Route //
        element={<CompositionPage />}
        path={NAVIGATION.PATH.COMPOSITION}
      />
      <Route //
        element={<GaugeClusterPage />}
        path={NAVIGATION.PATH.GAUGE_CLUSTER}
      />
      <Route //
        element={<Geometry2dPage />}
        path={NAVIGATION.PATH.GEOMETRY_2D}
      />
      <Route //
        element={<Geometry3dPage />}
        path={NAVIGATION.PATH.GEOMETRY_3D}
      />
      <Route //
        element={<ImagePage />}
        path={NAVIGATION.PATH.IMAGE}
      />
      <Route //
        element={<LipsumPage />}
        path={NAVIGATION.PATH.LIPSUM}
      />
      <Route //
        element={<LogoPage />}
        path={NAVIGATION.PATH.LOGO}
      />
      <Route //
        element={<NormalsPage />}
        path={NAVIGATION.PATH.NORMALS}
      />
      <Route //
        element={<ParticlesPage />}
        path={NAVIGATION.PATH.PARTICLES}
      />
      <Route //
        element={<PhysicsCannonTestPage />}
        path={NAVIGATION.PATH.PHYSICS_CANNON_TEST}
      />
      <Route //
        element={<PhysicsCannonWorldPage />}
        path={NAVIGATION.PATH.PHYSICS_CANNON_WORLD}
      />
      <Route //
        element={<PhysicsRapierCollidersAutoPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_COLLIDERS_AUTO}
      />
      <Route //
        element={<PhysicsRapierCollidersManualPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_COLLIDERS_MANUAL}
      />
      <Route //
        element={<PhysicsRapierDioramaPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_DIORAMA}
      />
      <Route //
        element={<PhysicsRapierPinballMachinePage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_PINBALL_MACHINE}
      />
      <Route //
        element={<PhysicsRapierTestPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_TEST}
      />
      <Route //
        element={<PhysicsRapierWorldPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_WORLD}
      />
      <Route //
        element={<SuzanneExportsPage />}
        path={NAVIGATION.PATH.SUZANNE_EXPORTS}
      />
      <Route //
        element={<SuzannePage />}
        path={NAVIGATION.PATH.SUZANNE}
      />
      <Route //
        element={<TripodPage />}
        path={NAVIGATION.PATH.TRIPOD}
      />
      <Route //
        element={<TexturePage />}
        path={NAVIGATION.PATH.TEXTURE}
      />
    </Routes>
  );
};

export { Pages };
