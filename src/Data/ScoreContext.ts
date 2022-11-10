import { createContext } from "react";

import { ScoreState } from "./ScoreState";

const scoreState = new ScoreState();

const ScoreContext = createContext<ScoreState>(scoreState);

export { ScoreContext, scoreState };
