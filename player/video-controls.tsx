/**
 * CLAUDE DESIGN SAMPLE — VideoControls bar
 * Production: src/components/video_player/VideoControls.tsx
 */
import React from "react";

export function VideoControlsSample() {
  const state = {
    isPlaying: true,
    currentTime: 2847, // seconds
    duration: 6360,
    volume: 0.8,
    isFullscreen: false,
    quality: "1080p",
    playbackSpeed: "1x",
  };

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = Math.floor(s % 60);
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
      : `${m}:${String(sec).padStart(2, "0")}`;
  };

  const progress = (state.currentTime / state.duration) * 100;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-12">
      {/* Progress bar */}
      <div className="relative h-1 bg-white/20 rounded-full mb-4 cursor-pointer group">
        <div className="absolute h-full bg-stir-yellow rounded-full" style={{ width: `${progress}%` }} />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-stir-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `${progress}%`, transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-white text-xl">{state.isPlaying ? "⏸" : "▶"}</button>
          <button className="text-white/70 text-sm">⏪ 10</button>
          <button className="text-white/70 text-sm">10 ⏩</button>
          <span className="text-white/70 text-xs">
            {formatTime(state.currentTime)} / {formatTime(state.duration)}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white/70 text-xs">{state.quality}</button>
          <button className="text-white/70 text-xs">{state.playbackSpeed}</button>
          <button className="text-white/70 text-sm">CC</button>
          <button className="text-white/70 text-sm">{state.isFullscreen ? "⛶" : "⛶"}</button>
        </div>
      </div>
    </div>
  );
}

export function ProgressBarSample() {
  const progress = 62; // 0–100

  return (
    <div className="space-y-4 p-4">
      {/* Card progress (continue watching) */}
      <div className="w-40 h-1 bg-white/20 rounded-full">
        <div className="h-full bg-stir-yellow rounded-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Player progress */}
      <div className="w-full h-1 bg-white/20 rounded-full relative">
        <div className="h-full bg-stir-yellow rounded-full" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default VideoControlsSample;
