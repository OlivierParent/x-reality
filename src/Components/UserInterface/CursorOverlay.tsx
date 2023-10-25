import { useState, useMemo } from "react";

import styles from "./CursorOverlay.module.css";

const cursorActive = "cursor-active";
const cursorInactive = "cursor-inactive";
const cursorActiveEvent = new Event(cursorActive);
const cursorInactiveEvent = new Event(cursorInactive);
const cursorActiveEventHandler = () => {
  window.dispatchEvent(cursorActiveEvent);
};
const cursorInactiveEventHandler = () => {
  window.dispatchEvent(cursorInactiveEvent);
};

/**
 * Cursor overlay for First-Person.
 *
 * @returns {JSX.Element}
 */
const UserInterfaceCursorOverlay = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  // Execute only once this session.
  useMemo(() => {
    window.addEventListener(cursorActive, () => {
      setIsActive(true);
    });
    window.addEventListener(cursorInactive, () => {
      setIsActive(false);
    });

    return null;
  }, []);

  return (
    <div
      className={styles["cursor"]}
      style={{ backgroundColor: isActive ? "white" : "transparent" }}
    ></div>
  );
};

export {
  cursorActiveEventHandler,
  cursorInactiveEventHandler,
  UserInterfaceCursorOverlay,
};
