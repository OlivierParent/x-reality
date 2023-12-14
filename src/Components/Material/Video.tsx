import { useEffect } from "react";
import { VideoTexture } from "three";

type MaterialVideoProps = {
  play: boolean;
  src: string;
};

const video = document.createElement("video");
const videoTexture = new VideoTexture(video);

/**
 * Video Material.
 *
 * A material displaying a video.
 *
 * @returns {React.JSX.Element}
 */
const MaterialVideo = ({
  play = false,
  src,
}: MaterialVideoProps): React.JSX.Element => {
  useEffect(() => {
    video.setAttribute("loop", "true");
    video.setAttribute("mute", "false");
  }, []);

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

  return (
    <meshBasicMaterial //
      color={0xffffff}
      map={videoTexture}
      toneMapped={false}
    />
  );
};

export { MaterialVideo as Material };
