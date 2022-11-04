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
