import { NavigationItem } from "Types/NavigationItem";

export namespace NAVIGATION {
  export enum PATH {
    ANIMATED_CUBE = "animated-cube",
    ANIMATION = "animation",
    BUTTON = "button",
    CLOCK = "clock",
    COMPOSITION = "composition",
    GAUGE = "gauge",
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
    PHYSICS_RAPIER_PINBALL_MACHINE = "rapier/pinball-machine",
    PHYSICS_RAPIER_TEST = "rapier/test",
    PHYSICS_RAPIER_WORLD = "rapier/world",
    SUZANNE = "suzanne",
    TEXTURE = "texture",
    TRIPOD = "tripod",
  }

  export const ITEMS: Array<NavigationItem> = [
    {
      label: "Animated Cube",
      to: PATH.ANIMATED_CUBE,
    },
    {
      label: "Animation",
      to: PATH.ANIMATION,
    },
    {
      label: "Button",
      to: PATH.BUTTON,
    },
    {
      label: "Clock",
      to: PATH.CLOCK,
    },
    {
      label: "Composition",
      to: PATH.COMPOSITION,
    },
    {
      label: "Gauge",
      to: PATH.GAUGE,
    },
    {
      label: "Geometry 2D",
      to: PATH.GEOMETRY_2D,
    },
    {
      label: "Geometry 3D",
      to: PATH.GEOMETRY_3D,
    },
    {
      label: "Image",
      to: PATH.IMAGE,
    },
    {
      label: "Lipsum",
      to: PATH.LIPSUM,
    },
    {
      label: "Logo",
      to: PATH.LOGO,
    },
    {
      label: "Normals",
      to: PATH.NORMALS,
    },
    {
      label: "Particles",
      to: PATH.PARTICLES,
    },
    {
      label: "Physics-Cannon Test",
      to: PATH.PHYSICS_CANNON_TEST,
    },
    {
      label: "Physics-Cannon World",
      to: PATH.PHYSICS_CANNON_WORLD,
    },
    {
      label: "Physics-Rapier Colliders (Auto)",
      to: PATH.PHYSICS_RAPIER_COLLIDERS_AUTO,
    },
    {
      label: "Physics-Rapier Colliders (Manual)",
      to: PATH.PHYSICS_RAPIER_COLLIDERS_MANUAL,
    },
    {
      label: "Physics-Rapier Pinball Machine",
      to: PATH.PHYSICS_RAPIER_PINBALL_MACHINE,
    },
    {
      label: "Physics-Rapier Test",
      to: PATH.PHYSICS_RAPIER_TEST,
    },
    {
      label: "Physics-Rapier World",
      to: PATH.PHYSICS_RAPIER_WORLD,
    },
    {
      label: "Suzanne",
      to: PATH.SUZANNE,
    },
    {
      label: "Texture",
      to: PATH.TEXTURE,
    },
    {
      label: "Tripod",
      to: PATH.TRIPOD,
    },
  ];
}
