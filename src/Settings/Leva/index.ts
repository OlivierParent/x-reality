export namespace SettingsLeva {
  export const folder = (
    order: number = 0,
    collapsed: boolean = true,
    color?: string
  ) => ({
    collapsed,
    color,
    order,
  });
}
