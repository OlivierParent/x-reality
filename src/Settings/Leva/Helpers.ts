export namespace SettingsLevaHelpers {
  export const axesHelper = (value: boolean = false) => ({
    label: "Axes",
    value,
  });

  export const gizmoHelper = (value: boolean = false) => ({
    label: "Gizmo",
    value,
  });

  export const gridHelper = (value: boolean = false) => ({
    label: "Grid",
    value,
  });

  export const polarGridHelper = (value: boolean = false) => ({
    label: "Polar Grid",
    value,
  });

  export const stats = (value: boolean = false) => ({ label: "Stats", value });
}
