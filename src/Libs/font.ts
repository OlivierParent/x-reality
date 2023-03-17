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
    url: "https://fonts.gstatic.com/s/asap/v26/KFOOCniXp96a4Tc2DaTeuDAoKsE617JFc49knOIYdjTYkqUsLQ.woff",
  };

  export const CODA: FontFamily = {
    name: "Coda",
    url: "https://fonts.gstatic.com/s/coda/v21/SLXHc1jY5nQ8JUE.woff",
  };

  export const PLAY: FontFamily = {
    name: "Play",
    url: "https://fonts.gstatic.com/s/play/v17/6aez4K2oVqwIjtE.woff",
  };

  export const POPPINS: FontFamily = {
    name: "Poppins",
    url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJM.woff",
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

  export const SILKSCREEN: FontFamily = {
    name: "Silkscreen",
    url: "https://fonts.gstatic.com/s/silkscreen/v1/m8JXjfVPf62XiF7kO-i9ULc.woff",
  };

  export const TANGERINE: FontFamily = {
    name: "Tangerine",
    url: "https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOBDQ.woff",
  };
}
