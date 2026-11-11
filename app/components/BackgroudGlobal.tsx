"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGlobal() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playBackground = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error("No se pudo reproducir el background:", error);
      }
    };

    window.addEventListener("play-background", playBackground);

    return () => {
      window.removeEventListener("play-background", playBackground);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 backdrop-blur-xs" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
