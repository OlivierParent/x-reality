import { NavLink } from "react-router-dom";

import { BuildStamp } from "Components/UserInterface/BuildStamp";
import { NAVIGATION } from "Configs/navigation";

import styles from "Components/UserInterface/Navigation.module.css";

/**
 * Navigation menu.
 *
 * @returns {JSX.Element}
 */
const UserInterfaceNavigation = (): JSX.Element => {
  return (
    <nav className={styles["nav"]}>
      <ul>
        {NAVIGATION.ITEMS.map(({ label, path: to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                [styles["nav__item"], isActive ? styles["-active"] : undefined]
                  .join(" ")
                  .trim()
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles["nav__buildstamp"]}>
        <BuildStamp />
      </div>
    </nav>
  );
};

export { UserInterfaceNavigation };
