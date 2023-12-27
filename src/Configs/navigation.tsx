import { NavigationItem } from "Types/NavigationItem";
import { lazy } from "react";

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
const SpringAnimationPage = lazy(
  () => import("Pages/SpringAnimationPage") //
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

export namespace NAVIGATION {
  export enum PATH {
    ANIMATED_CUBE = "animated-cube",
    ANIMATION = "animation",
    BUTTON = "button",
    CALENDAR = "calendar",
    CLOCK = "clock",
    COMPOSITION = "composition",
    GAUGE_CLUSTER = "gauge-cluster",
    GEOMETRY_2D = "geometry-2d",
    GEOMETRY_3D = "geometry-3d",
    IMAGE = "image",
    LIPSUM = "lipsum",
    LOGO = "logo",
    NORMALS = "normals",
    PARTICLES = "particles",
    PHYSICS_CANNON_TEST = "cannon/test",
    PHYSICS_CANNON_WORLD = "cannon/world",
    PHYSICS_RAPIER_COLLIDERS_AUTO = "rapier/colliders/auto",
    PHYSICS_RAPIER_COLLIDERS_MANUAL = "rapier/colliders/manual",
    PHYSICS_RAPIER_DIORAMA = "rapier/diorama",
    PHYSICS_RAPIER_PINBALL_MACHINE = "rapier/pinball-machine",
    PHYSICS_RAPIER_TEST = "rapier/test",
    PHYSICS_RAPIER_WORLD = "rapier/world",
    PHYSICS_RAPIER_XR_AR = "rapier/xr-ar",
    PHYSICS_RAPIER_XR_VR = "rapier/xr-vr",
    SPRING_ANIMATION = "spring-animation",
    STATIC_SCENE = "static-scene",
    SUZANNE = "suzanne/material",
    SUZANNE_EXPORTS = "suzanne/exports",
    TELEVISION = "television",
    TEXTURED_MESH = "textured-mesh",
    TRIPOD = "tripod",
  }

  export const ITEMS: NavigationItem[] = [
    {
      element: <AnimatedCubePage />,
      label: "Animated Cube",
      path: PATH.ANIMATED_CUBE,
    },
    {
      element: <AnimationPage />,
      label: "Animation",
      path: PATH.ANIMATION,
    },
    {
      element: <ButtonPage />,
      label: "Button",
      path: PATH.BUTTON,
    },
    {
      element: <CalendarPage />,
      label: "Calendar",
      path: PATH.CALENDAR,
    },
    {
      element: <ClockPage />,
      label: "Clock",
      path: PATH.CLOCK,
    },
    {
      element: <CompositionPage />,
      label: "Composition",
      path: PATH.COMPOSITION,
    },
    {
      element: <GaugeClusterPage />,
      label: "Gauge Cluster",
      path: PATH.GAUGE_CLUSTER,
    },
    {
      element: <Geometry2dPage />,
      label: "Geometry 2D",
      path: PATH.GEOMETRY_2D,
    },
    {
      element: <Geometry3dPage />,
      label: "Geometry 3D",
      path: PATH.GEOMETRY_3D,
    },
    {
      element: <ImagePage />,
      label: "Image",
      path: PATH.IMAGE,
    },
    {
      element: <LipsumPage />,
      label: "Lipsum",
      path: PATH.LIPSUM,
    },
    {
      element: <LogoPage />,
      label: "Logo",
      path: PATH.LOGO,
    },
    {
      element: <NormalsPage />,
      label: "Normals",
      path: PATH.NORMALS,
    },
    {
      element: <ParticlesPage />,
      label: "Particles",
      path: PATH.PARTICLES,
    },
    {
      element: <PhysicsCannonTestPage />,
      label: "Physics-Cannon Test",
      path: PATH.PHYSICS_CANNON_TEST,
    },
    {
      element: <PhysicsCannonWorldPage />,
      label: "Physics-Cannon World",
      path: PATH.PHYSICS_CANNON_WORLD,
    },
    {
      element: <PhysicsRapierCollidersAutoPage />,
      label: "Physics-Rapier Colliders (Auto)",
      path: PATH.PHYSICS_RAPIER_COLLIDERS_AUTO,
    },
    {
      element: <PhysicsRapierCollidersManualPage />,
      label: "Physics-Rapier Colliders (Manual)",
      path: PATH.PHYSICS_RAPIER_COLLIDERS_MANUAL,
    },
    {
      element: <PhysicsRapierDioramaPage />,
      label: "Physics-Rapier Diorama",
      path: PATH.PHYSICS_RAPIER_DIORAMA,
    },
    {
      element: <PhysicsRapierPinballMachinePage />,
      label: "Physics-Rapier Pinball Machine",
      path: PATH.PHYSICS_RAPIER_PINBALL_MACHINE,
    },
    {
      element: <PhysicsRapierTestPage />,
      label: "Physics-Rapier Test",
      path: PATH.PHYSICS_RAPIER_TEST,
    },
    {
      element: <PhysicsRapierWorldPage />,
      label: "Physics-Rapier World",
      path: PATH.PHYSICS_RAPIER_WORLD,
    },
    {
      element: <PhysicsRapierXrArPage />,
      label: "Physics-Rapier XR (AR)",
      path: PATH.PHYSICS_RAPIER_XR_AR,
    },
    {
      element: <PhysicsRapierXrVrPage />,
      label: "Physics-Rapier XR (VR)",
      path: PATH.PHYSICS_RAPIER_XR_VR,
    },
    {
      element: <SpringAnimationPage />,
      label: "Spring-based Animation",
      path: PATH.SPRING_ANIMATION,
    },
    {
      element: <StaticScenePage />,
      label: "Static Scene",
      path: PATH.STATIC_SCENE,
    },
    {
      element: <SuzannePage />,
      label: "Suzanne",
      path: PATH.SUZANNE,
    },
    {
      element: <SuzanneExportsPage />,
      label: "Suzanne Exports",
      path: PATH.SUZANNE_EXPORTS,
    },
    {
      element: <TelevisionPage />,
      label: "Television",
      path: PATH.TELEVISION,
    },
    {
      element: <TexturedMeshPage />,
      label: "Textured Mesh",
      path: PATH.TEXTURED_MESH,
    },
    {
      element: <TripodPage />,
      label: "Tripod",
      path: PATH.TRIPOD,
    },
  ];
}
