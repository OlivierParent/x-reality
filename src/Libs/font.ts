import { FontFamily } from "Types/FontFamily";

/**
 * Only WOFF accepted, not WOFF2!
 *
 * @see https://fonts.google.com/
 * @see https://developers.google.com/fonts/docs/css2
 *
 * Make a request with header `User-Agent`: `Mozilla/5.0 (MSIE 11.0)` and turn off automatic URL encoding.
 * E.g. https://fonts.googleapis.com/css2?family=Asap
 */
export namespace FONT_FAMILY {
  export const ARCHITECTS_DAUGHTER: FontFamily = {
    name: "Architects Daughter",
    url: "https://fonts.gstatic.com/s/architectsdaughter/v18/KtkxAKiDZI_td1Lkx62xHZHDtgO_Y-bvfY0.woff",
  };

  export const ASAP: FontFamily = {
    name: "Asap",
    url: "https://fonts.gstatic.com/s/asap/v24/KFO9CniXp96a4Tc2EZzSuDAoKsE61qhN.woff",
  };

  export const PRESS_START_2P: FontFamily = {
    name: "Press Start 2P",
    url: "https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK0nR.woff",
  };

  export const REDACTED_SCRIPT: FontFamily = {
    name: "Redacted Script",
    url: "https://fonts.gstatic.com/s/redactedscript/v6/ypvBbXGRglhokR7dcC3d1-R6zmxSsg.woff",
  };

  export const ROBOTO: FontFamily = {
    name: "Roboto",
    url: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5g.woff",
  };

  export const ROBOTO_SLAB: FontFamily = {
    name: "Roboto Slab",
    url: "https://fonts.gstatic.com/s/robotoslab/v24/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISWaw.woff",
  };

  export const TANGERINE: FontFamily = {
    name: "Tangerine",
    url: "https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOBDQ.woff",
  };
}
