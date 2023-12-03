import { NavLink } from "react-router-dom";

import { BuildStamp } from "Components/UserInterface/BuildStamp";
import { NAVIGATION } from "Configs/navigation";

import styles from "Components/UserInterface/Navigation.module.css";

/**
 * Navigation menu.
 *
 * @returns {React.JSX.Element}
 */
const UserInterfaceNavigation = (): React.JSX.Element => {
  return (
    <nav className={styles["nav"]}>
      <ul>
        {NAVIGATION.ITEMS.map((navigationItem) => (
          <li key={navigationItem.to}>
            <NavLink
              to={navigationItem.to}
              className={({ isActive }) =>
                [styles["nav__item"], isActive ? styles["-active"] : undefined]
                  .join(" ")
                  .trim()
              }
            >
              {navigationItem.label}
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
