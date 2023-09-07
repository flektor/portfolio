import React, { useMemo } from "react";

export default function useVideo(src: string) {
  const memorizedVideo = useMemo(() => {
    return src ? <video autoPlay loop muted src={src} /> : null;
  }, [src]);
  return memorizedVideo;
}
