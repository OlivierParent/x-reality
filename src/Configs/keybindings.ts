import { KeyboardControlsEntry } from "@react-three/drei";

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

  enum KEY {
    A = "KeyA",
    D = "KeyD",
    DOWN = "ArrowDown",
    E = "KeyE",
    F = "KeyF",
    J = "KeyJ",
    LEFT = "ArrowLeft",
    Q = "KeyQ",
    ENTER = "Enter",
    RIGHT = "ArrowRight",
    S = "KeyS",
    SHIFT = "Shift",
    SPACE = "Space",
    UP = "ArrowUp",
    W = "KeyW",
    Z = "KeyZ",
  }

  const ESDF: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerMoveBackward, keys: [KEY.DOWN, KEY.D] },
    { name: CONTROLS.playerMoveForward, keys: [KEY.UP, KEY.E] },
    { name: CONTROLS.playerMoveLeft, keys: [KEY.LEFT, KEY.S] },
    { name: CONTROLS.playerMoveRight, keys: [KEY.RIGHT, KEY.F] },
  ];

  const OTHER: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerJump, keys: [KEY.SPACE] },
    { name: CONTROLS.playerRun, keys: [KEY.SHIFT] },
  ];

  const WASD: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerMoveBackward, keys: [KEY.DOWN, KEY.S] },
    { name: CONTROLS.playerMoveForward, keys: [KEY.UP, KEY.W] },
    { name: CONTROLS.playerMoveLeft, keys: [KEY.LEFT, KEY.A] },
    { name: CONTROLS.playerMoveRight, keys: [KEY.RIGHT, KEY.D] },
  ];

  const ZQSD: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.playerMoveBackward, keys: [KEY.DOWN, KEY.S] },
    { name: CONTROLS.playerMoveForward, keys: [KEY.UP, KEY.Z] },
    { name: CONTROLS.playerMoveLeft, keys: [KEY.LEFT, KEY.Q] },
    { name: CONTROLS.playerMoveRight, keys: [KEY.RIGHT, KEY.D] },
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
    { name: CONTROLS.pinballFlipperBoth, keys: [KEY.SPACE] },
    { name: CONTROLS.pinballFlipperLeft, keys: [KEY.F] },
    { name: CONTROLS.pinballFlipperRight, keys: [KEY.J] },
    { name: CONTROLS.pinballShoot, keys: [KEY.ENTER] },
  ];
}
