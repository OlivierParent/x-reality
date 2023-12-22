import { ThreeEvent } from "@react-three/fiber";
import { useMemo, useState } from "react";

import { CUSTOM_EVENTS } from "Configs/custom_events";

import styles from "Components/UserInterface/CursorOverlay.module.css";

// Events.
const cursorActiveEvent = new Event(CUSTOM_EVENTS.CURSOR_ACTIVE);
const cursorInactiveEvent = new Event(CUSTOM_EVENTS.CURSOR_INACTIVE);

// Event handlers.
const cursorActiveHandler = (event: ThreeEvent<MouseEvent>) => {
  event.stopPropagation();
  window.dispatchEvent(cursorActiveEvent);
};
const cursorInactiveHandler = (event: ThreeEvent<MouseEvent>) => {
  event.stopPropagation();
  window.dispatchEvent(cursorInactiveEvent);
};

/**
 * Cursor overlay for First-Person.
 *
 * @returns {JSX.Element}
 */
const UserInterfaceCursorOverlay = (): JSX.Element => {
  // States.
  const [isActive, setIsActive] = useState(false);

  // Execute only once this session.
  useMemo(() => {
    window.addEventListener(CUSTOM_EVENTS.CURSOR_ACTIVE, () => {
      setIsActive(true);
    });
    window.addEventListener(CUSTOM_EVENTS.CURSOR_INACTIVE, () => {
      setIsActive(false);
    });
  }, []);

  const backgroundColor = isActive ? "white" : "transparent";

  return (
    <div //
      className={styles["cursor"]}
      style={{ backgroundColor }}
    ></div>
  );
};

export {
  UserInterfaceCursorOverlay as CursorOverlay,
  cursorActiveHandler,
  cursorInactiveHandler,
};
