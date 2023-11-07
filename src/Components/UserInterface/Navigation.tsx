import { NavLink } from "react-router-dom";

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
    </nav>
  );
};

export { UserInterfaceNavigation };
