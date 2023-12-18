import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, RoutesProps } from "react-router-dom";

import { NAVIGATION } from "Configs/navigation";

const AnimatedCubePage = lazy(
  () => import("Pages/AnimatedCubePage") //
);
const AnimationPage = lazy(
  () => import("Pages/AnimationPage") //
);
const ButtonPage = lazy(
  () => import("Pages/ButtonPage") //
);
const CalendarPage = lazy(
  () => import("Pages/CalendarPage") //
);
const ClockPage = lazy(
  () => import("Pages/ClockPage") //
);
const CompositionPage = lazy(
  () => import("Pages/CompositionPage") //
);
const GaugeClusterPage = lazy(
  () => import("Pages/GaugeClusterPage") //
);
const Geometry2dPage = lazy(
  () => import("Pages/Geometry2dPage") //
);
const Geometry3dPage = lazy(
  () => import("Pages/Geometry3dPage") //
);
const ImagePage = lazy(
  () => import("Pages/ImagePage") //
);
const LipsumPage = lazy(
  () => import("Pages/LipsumPage") //
);
const LogoPage = lazy(
  () => import("Pages/LogoPage") //
);
const NormalsPage = lazy(
  () => import("Pages/NormalsPage") //
);
const ParticlesPage = lazy(
  () => import("Pages/ParticlesPage") //
);
const PhysicsCannonTestPage = lazy(
  () => import("Pages/PhysicsCannonTestPage") //
);
const PhysicsCannonWorldPage = lazy(
  () => import("Pages/PhysicsCannonWorldPage") //
);
const PhysicsRapierCollidersAutoPage = lazy(
  () => import("Pages/PhysicsRapierCollidersAutoPage")
);
const PhysicsRapierCollidersManualPage = lazy(
  () => import("Pages/PhysicsRapierCollidersManualPage")
);
const PhysicsRapierDioramaPage = lazy(
  () => import("Pages/PhysicsRapierDioramaPage")
);
const PhysicsRapierPinballMachinePage = lazy(
  () => import("Pages/PhysicsRapierPinballMachinePage")
);
const PhysicsRapierTestPage = lazy(
  () => import("Pages/PhysicsRapierTestPage") //
);
const PhysicsRapierWorldPage = lazy(
  () => import("Pages/PhysicsRapierWorldPage")
);
const PhysicsRapierXrArPage = lazy(
  () => import("Pages/PhysicsRapierXrArPage") //
);
const PhysicsRapierXrVrPage = lazy(
  () => import("Pages/PhysicsRapierXrVrPage") //
);
const StaticScenePage = lazy(
  () => import("Pages/StaticScenePage") //
);
const SuzanneExportsPage = lazy(
  () => import("Pages/SuzanneExportsPage") //
);
const SuzannePage = lazy(
  () => import("Pages/SuzannePage") //
);
const TelevisionPage = lazy(
  () => import("Pages/TelevisionPage") //
);
const TexturedMeshPage = lazy(
  () => import("Pages/TexturedMeshPage") //
);
const TripodPage = lazy(
  () => import("Pages/TripodPage") //
);

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
    <Suspense>
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
          element={<PhysicsRapierXrArPage />}
          path={NAVIGATION.PATH.PHYSICS_RAPIER_XR_AR}
        />
        <Route //
          element={<PhysicsRapierXrVrPage />}
          path={NAVIGATION.PATH.PHYSICS_RAPIER_XR_VR}
        />
        <Route //
          element={<StaticScenePage />}
          path={NAVIGATION.PATH.STATIC_SCENE}
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
          element={<TelevisionPage />}
          path={NAVIGATION.PATH.TELEVISION}
        />
        <Route //
          element={<TripodPage />}
          path={NAVIGATION.PATH.TRIPOD}
        />
        <Route //
          element={<TexturedMeshPage />}
          path={NAVIGATION.PATH.TEXTURED_MESH}
        />
      </Routes>
    </Suspense>
  );
};

export { Pages };
