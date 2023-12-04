import { useEffect } from "react";
import { VideoTexture } from "three";

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
  src,
  play = false,
}: {
  src: string;
  play: boolean;
}): React.JSX.Element => {
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
