import { HashRouter as Router } from "react-router-dom";

import { UserInterfaceNavigation as Navigation } from "Components/UserInterface/Navigation";
import { Pages } from "Pages";

import "Styles/main.css";

/**
 * App.
 *
 * @returns {React.JSX.Element}
 */
const App = (): React.JSX.Element => {
  return (
    <Router>
      <Navigation />
      <Pages />
    </Router>
  );
};

export { App };
