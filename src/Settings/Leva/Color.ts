export namespace SettingsLevaColor {
  export enum values {
    "Blue" = "hsl(240, 100%, 70%)",
    "Blueish" = "hsl(210, 100%, 70%)",
    "Cold" = "hsl(240, 100%, 99%)",
    "Cyan" = "hsl(180, 100%, 70%)",
    "Green" = "hsl(0, 100%, 70%)",
    "Magenta" = "hsl(300, 100%, 70%)",
    "Red" = "hsl(0, 100%, 70%)",
    "Reddish" = "hsl(30, 100%, 70%)",
    "Warm" = "hsl(0, 100%, 99%)",
    "White" = "hsl(0, 0%, 100%)",
    "Yellow" = "hsl(60, 100%, 70%)",
  }

  export function color(value: string = values.White, prefix: string = "") {
    return { label: `${prefix} Color`.trim(), value };
  }
}
