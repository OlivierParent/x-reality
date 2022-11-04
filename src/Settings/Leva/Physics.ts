export namespace SettingsLevaPhysics {
  export const gravity = (x: number = 0, y: number = -9.81, z: number = 0) => ({
    label: "Gravity",
    value: { x, y, z },
  });

  export const paused = (value: boolean = false) => ({
    label: "Paused",
    value,
  });

  export const showDebug = (value: boolean = false) => ({
    label: "Debug",
    value,
  });
}
