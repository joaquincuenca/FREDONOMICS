import { useEffect, useRef } from "react";

export function PromoVideo({
  className,
  src = "/videos/video.mp4",
  poster = "/images/video-placeholder.png",
  fallbackText = "Your browser does not support the video tag.",
}: {
  className?: string;
  src?: string;
  poster?: string;
  fallbackText?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video
            .play()
            .catch((err: Error) => console.log("Autoplay prevented:", err));
        } else {
          video.pause();
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);
    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      loop
      muted
      playsInline
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      {fallbackText}
    </video>
  );
}
