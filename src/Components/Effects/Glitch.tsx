import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { GlitchMode } from "postprocessing";
import { Vector2 } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsGlitch as GlitchEffect } from "Settings/Leva/Effects/Glitch";

/**
 * Glitch effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/glitch
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/GlitchEffect.js~GlitchEffect.html
 */
const EffectsGlitch = () => {
  const { active, columns, delay, dtSize, duration, mode, ratio, strength } =
    useControls(
      LEVA.SCHEMA.GENERAL,
      {
        "Effects Composer": folder(
          {
            "Glitch Effect": folder({
              active: GlitchEffect.active(),
              columns: GlitchEffect.columns(),
              delay: GlitchEffect.delay(),
              dtSize: GlitchEffect.dtSize(),
              duration: GlitchEffect.duration(),
              mode: GlitchEffect.mode(),
              ratio: GlitchEffect.ratio(),
              strength: GlitchEffect.strength(),
            }),
          },
          Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
        ),
      },
      Settings.folder(LEVA.ORDER.GENERAL)
    );

  return (
    <EffectComposer>
      <Glitch
        active={active}
        columns={columns}
        delay={new Vector2(delay.minimum, delay.maximum)}
        dtSize={dtSize}
        duration={new Vector2(duration.minimum, duration.maximum)}
        mode={mode as GlitchMode}
        ratio={ratio}
        strength={new Vector2(strength.weak, strength.strong)}
      />
    </EffectComposer>
  );
};

export { EffectsGlitch as Glitch };
