import { useControls } from "leva";

import { Demo } from "Components/Lighting/Demo";
import { Studio } from "Components/Lighting/Studio";
import { ThreePoint } from "Components/Lighting/ThreePoint";
import { ThreePointVolumetric } from "Components/Lighting/ThreePointVolumetric";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";

const LIGHTING = Object.freeze({
  Demo: "Demo",
  None: "None",
  Studio: "Studio",
  ThreePoint: "ThreePoint",
  ThreePointVolumetric: "ThreePoint Volumetric",
});

function enableLighting(name: string) {
  let element;
  switch (name) {
    case LIGHTING.Demo:
      element = <Demo />;
      break;
    case LIGHTING.Studio:
      element = <Studio />;
      break;
    case LIGHTING.ThreePoint:
      element = <ThreePoint />;
      break;
    case LIGHTING.ThreePointVolumetric:
      element = <ThreePointVolumetric />;
      break;
    default:
      element = null;
  }
  return element;
}

const Lighting = () => {
  const { lightingName } = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      lightingName: {
        label: "Lighting",
        options: {
          "None                  ": LIGHTING.None,
          "Demo                  ": LIGHTING.Demo,
          "Studio                ": LIGHTING.Studio,
          "Three Point           ": LIGHTING.ThreePoint,
          "Three Point Volumetric": LIGHTING.ThreePointVolumetric,
        },
        value: LIGHTING.Studio,
      },
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );

  return enableLighting(lightingName);
};

export { Lighting };
