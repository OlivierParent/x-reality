import { FRAMELOOPS } from "Configs/frameloops";

export namespace SettingsLevaCanvas {
  export const flat = (value: boolean = false) => ({
    hint: "Use THREE.NoToneMapping instead of THREE.ACESFilmicToneMapping.",
    label: "Flat",
    value,
  });

  export const frameloop = (value = FRAMELOOPS.ALWAYS) => ({
    hint: "Render mode.",
    label: "Frameloop",
    options: FRAMELOOPS,
    value,
  });

  export const linear = (value: boolean = false) => ({
    hint: "Switch off automatic sRGB encoding and gamma correction.",
    label: "Linear",
    value,
  });

  export const shadows = (value: boolean = false) => ({
    hint: "Props that go into gl.shadowMap, can also be set true for PCFsoft.",
    label: "Shadows",
    value,
  });
}
