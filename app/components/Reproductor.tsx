"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("seeking", updateTime);
    audio.addEventListener("seeked", updateTime);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    updateDuration();
    updateTime();

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("seeking", updateTime);
      audio.removeEventListener("seeked", updateTime);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleEnter = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      setError("");

      if (audio.ended) {
        audio.currentTime = 0;
      }

      // Reproducir música
      await audio.play();

      // Reproducir background
      window.dispatchEvent(new Event("play-background"));

      setEntered(true);
    } catch (err) {
      console.error(err);
      setError("No se pudo reproducir el audio.");
    }
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      setError("");

      if (audio.paused) {
        if (audio.ended) {
          audio.currentTime = 0;
        }

        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo reproducir el audio.");
    }
  };

  const handleSeek = (value: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) return;

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const progress =
    duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

  return (
    <>
      <audio ref={audioRef} src="/songs/music.mp3" preload="auto" />

      {/* Welcome screen */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-zinc-700/10 backdrop-blur-xl transition-opacity duration-700 ${
          entered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={handleEnter}
          className="text-white text-sm tracking-[0.3em] uppercase hover:opacity-50 transition-opacity"
        >
          Click to continue
        </button>

        {error && <p className="mt-4 text-xs text-red-400">{error}</p>}
      </div>

      {/* Audio player */}
      {entered && (
        <div className="flex items-center gap-3 w-full p-4 bg-white/5 border border-white/20 backdrop-blur-3xl rounded-xl shadow-lg my-4">
          <button onClick={togglePlay} className="text-white">
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>

          <div className="flex-1 space-y-1">
            <input
              type="range"
              min={0}
              max={duration || 1}
              step={0.01}
              value={Math.min(currentTime, duration || 0)}
              onChange={(e) => handleSeek(Number(e.target.value))}
              style={{
                background: `linear-gradient(to right, white ${progress}%, #52525b ${progress}%)`,
              }}
              className="w-full h-1 appearance-none rounded-full cursor-pointer"
            />

            <div className="flex justify-between text-xs text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function formatTime(time: number) {
  if (!Number.isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
