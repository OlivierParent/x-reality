import { FontFamily } from "Types/FontFamily";

/**
 * Only WOFF accepted, not WOFF2!
 *
 * @see https://fonts.google.com/
 *
 * Make a request with header `User-Agent`: `Mozilla/5.0 (MSIE 11.0)` and turn off automatic URL encoding.
 */
export namespace FONT_FAMILY {
  export const ARCHITECTS_DAUGHTER: FontFamily = {
    name: "Architects Daughter",
    url: "https://fonts.gstatic.com/s/architectsdaughter/v11/KtkxAKiDZI_td1Lkx62xHZHDtgO_Y-bvfY0.woff",
  };
  export const PRESS_START_2P: FontFamily = {
    name: "Press Start 2P",
    url: "https://fonts.gstatic.com/s/pressstart2p/v9/e3t4euO8T-267oIAQAu6jDQyK0nR.woff",
  };

  export const REDACTED_SCRIPT: FontFamily = {
    name: "Redacted Script",
    url: "https://fonts.gstatic.com/s/redactedscript/v1/ypvBbXGRglhokR7dcC3d1-R6zmxitm72.woff",
  };

  export const ROBOTO: FontFamily = {
    name: "Roboto",
    url: "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxM.woff",
  };

  export const ROBOTO_SLAB: FontFamily = {
    name: "Roboto Slab",
    url: "https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjovoSWaw.woff",
  };
  export const TANGERINE: FontFamily = {
    name: "Tangerine",
    url: "https://fonts.gstatic.com/s/tangerine/v12/IurY6Y5j_oScZZow4VOBDQ.woff",
  };
}
