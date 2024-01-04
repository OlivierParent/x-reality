import { KeyboardControlsEntry } from "@react-three/drei";

import { KeyboardKey } from "Types/KeyboardKey";

export namespace KEYBINDINGS {
  enum CONTROLS {
    playerJump = "playerJump",
    playerMoveBackward = "playerMoveBackward",
    playerMoveForward = "playerMoveForward",
    playerMoveLeft = "playerMoveLeft",
    playerMoveRight = "playerMoveRight",
    playerRun = "playerRun",
    pinballFlipperBoth = "pinballFlipperBoth",
    pinballFlipperLeft = "pinballFlipperLeft",
    pinballFlipperRight = "pinballFlipperRight",
    pinballShoot = "pinballShoot",
  }

  const KEYBOARD: Record<string, KeyboardKey> = {
    A: "KeyA",
    D: "KeyD",
    DOWN: "ArrowDown",
    E: "KeyE",
    ENTER: "Enter",
    F: "KeyF",
    J: "KeyJ",
    LEFT: "ArrowLeft",
    Q: "KeyQ",
    RIGHT: "ArrowRight",
    S: "KeyS",
    SHIFT: "Shift",
    SPACE: "Space",
    UP: "ArrowUp",
    W: "KeyW",
    Z: "KeyZ",
  };

  const ESDF: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerMoveBackward, keys: [KEYBOARD.DOWN, KEYBOARD.D] },
    { name: CONTROLS.playerMoveForward, keys: [KEYBOARD.UP, KEYBOARD.E] },
    { name: CONTROLS.playerMoveLeft, keys: [KEYBOARD.LEFT, KEYBOARD.S] },
    { name: CONTROLS.playerMoveRight, keys: [KEYBOARD.RIGHT, KEYBOARD.F] },
  ];

  const OTHER: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerJump, keys: [KEYBOARD.SPACE] },
    { name: CONTROLS.playerRun, keys: [KEYBOARD.SHIFT] },
  ];

  const WASD: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerMoveBackward, keys: [KEYBOARD.DOWN, KEYBOARD.S] },
    { name: CONTROLS.playerMoveForward, keys: [KEYBOARD.UP, KEYBOARD.W] },
    { name: CONTROLS.playerMoveLeft, keys: [KEYBOARD.LEFT, KEYBOARD.A] },
    { name: CONTROLS.playerMoveRight, keys: [KEYBOARD.RIGHT, KEYBOARD.D] },
  ];

  const ZQSD: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerMoveBackward, keys: [KEYBOARD.DOWN, KEYBOARD.S] },
    { name: CONTROLS.playerMoveForward, keys: [KEYBOARD.UP, KEYBOARD.Z] },
    { name: CONTROLS.playerMoveLeft, keys: [KEYBOARD.LEFT, KEYBOARD.Q] },
    { name: CONTROLS.playerMoveRight, keys: [KEYBOARD.RIGHT, KEYBOARD.D] },
  ];

  /**
   * First-Person keybindings configuration,
   * for AZERTY keyboard layout.
   */
  export const CONFIG_FIRST_PERSON_AZERTY: Array<KeyboardControlsEntry> = [
    ...ZQSD,
    ...OTHER,
  ];

  /**
   * First-Person keybindings configuration,
   * for universal keyboard layout.
   */
  export const CONFIG_FIRST_PERSON_UNIVERSAL: Array<KeyboardControlsEntry> = [
    ...ESDF,
    ...OTHER,
  ];

  /**
   * First-Person keybindings configuration,
   * for QWERTY keyboard layout.
   */
  export const CONFIG_FIRST_PERSON_QWERTY: Array<KeyboardControlsEntry> = [
    ...WASD,
    ...OTHER,
  ];

  /**
   * Pinball Machine keybindings configuration.
   */
  export const CONFIG_PINBALL_MACHINE: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.pinballFlipperBoth, keys: [KEYBOARD.SPACE] },
    { name: CONTROLS.pinballFlipperLeft, keys: [KEYBOARD.F] },
    { name: CONTROLS.pinballFlipperRight, keys: [KEYBOARD.J] },
    { name: CONTROLS.pinballShoot, keys: [KEYBOARD.ENTER] },
  ];
}
