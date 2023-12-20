import { useEffect } from "react";
import { VideoTexture } from "three";

type MaterialVideoProps = {
  loop?: boolean;
  muted?: boolean;
  play?: boolean;
  src: string;
  volume?: number;
};

const video = document.createElement("video");
const videoTexture = new VideoTexture(video);

/**
 * Video Material.
 *
 * A material displaying a video.
 *
 * @param {MaterialVideoProps} props
 * @returns {React.JSX.Element}
 */
const MaterialVideo = ({
  loop = true,
  muted = false,
  play = false,
  src,
  volume = 1,
}: MaterialVideoProps): React.JSX.Element => {
  useEffect(() => {
    video.loop = loop;
  }, [loop]);

  useEffect(() => {
    video.setAttribute("muted", muted ? "true" : "false");
  }, [muted]);

  useEffect(() => {
    if (play) {
      video.play();
    } else {
      video.pause();
    }
  }, [play]);

  useEffect(() => {
    video.src = src;
    video.load();
  }, [src]);

  useEffect(() => {
    video.volume = volume;
  }, [volume]);

  return (
    <meshBasicMaterial //
      color="white"
      map={videoTexture}
      toneMapped={false}
    />
  );
};

export { MaterialVideo as Material };
