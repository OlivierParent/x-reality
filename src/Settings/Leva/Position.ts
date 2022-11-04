import { Vector3 } from "three";

import { Position } from "Types/Position";

export namespace SettingsLevaPosition {
  export function position(x: number = 0, y: number = 0, z: number = 0) {
    return { label: "Position", value: { x, y, z } };
  }

  export function toArray(position: Position): Vector3 {
    return new Vector3(position.x, position.y, position.z);
  }
}
