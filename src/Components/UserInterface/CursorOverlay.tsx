import { ThreeEvent } from "@react-three/fiber";
import { useMemo, useState } from "react";

import { CUSTOM_EVENTS } from "Configs/custom_events";

import styles from "Components/UserInterface/CursorOverlay.module.css";

// Event handlers.
const cursorActiveHandler = (event: ThreeEvent<MouseEvent>) => {
  event.stopPropagation();
  window.dispatchEvent(new Event(CUSTOM_EVENTS.CURSOR_ACTIVE));
};
const cursorInactiveHandler = (event: ThreeEvent<MouseEvent>) => {
  event.stopPropagation();
  window.dispatchEvent(new Event(CUSTOM_EVENTS.CURSOR_INACTIVE));
};

/**
 * Cursor overlay for First-Person.
 *
 * @returns {React.JSX.Element}
 */
const UserInterfaceCursorOverlay = (): React.JSX.Element => {
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
