import { Frameloop } from "Types/Frameloop";

type Frameloops = { ALWAYS: Frameloop; DEMAND: Frameloop; NEVER: Frameloop };

export const FRAMELOOPS: Readonly<Frameloops> = {
  ALWAYS: "always",
  DEMAND: "demand",
  NEVER: "never",
};
