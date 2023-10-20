import React, { useMemo } from "react";

export default function useVideo(
  props: React.VideoHTMLAttributes<HTMLVideoElement>,
) {
  const memorizedVideo = useMemo(() => {
    return <video autoPlay loop muted {...props} />;
  }, [props.src]);
  return memorizedVideo;
}
