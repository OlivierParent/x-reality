const GRAVITATIONAL_ACCELERATION = 9.80665; // m/s^2

export namespace SettingsLevaPhysics {
  export const gravity = (
    x: number = 0,
    y: number = -GRAVITATIONAL_ACCELERATION,
    z: number = 0
  ) => ({
    label: "Gravity",
    hint: "Default = 9.81",
    value: { x, y, z },
  });

  export const paused = (value: boolean = false) => ({
    label: "Paused",
    hint: "Pause physics simulation.",
    value,
  });

  export const showDebug = (value: boolean = false) => ({
    label: "Debug",
    hint: "Show debug geometry.",
    value,
  });
}
