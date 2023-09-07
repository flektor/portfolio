import React, { useMemo } from "react";

export default function useVideo(src: string) {
  if (!src) {
    return null;
  }

  const memorizedVideo = useMemo(() => {
    return <video autoPlay loop muted src={src} />;
  }, [src]);
  return memorizedVideo;
}
