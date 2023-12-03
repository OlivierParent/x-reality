import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import { Vector2 } from "three";

import { useLeva } from "Hooks/Leva/Effects/Glitch";

/**
 * Glitch effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/glitch
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/GlitchEffect.js~GlitchEffect.html
 */
const EffectsGlitch = () => {
  // Leva Controls.
  const {
    active,
    blendFunction,
    columns,
    delay,
    dtSize,
    duration,
    mode,
    ratio,
    strength,
  } = useLeva();

  return (
    <EffectComposer>
      <Glitch
        active={active}
        blendFunction={blendFunction as BlendFunction}
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
