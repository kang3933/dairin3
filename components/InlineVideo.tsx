"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

export default function InlineVideo({ src, poster, label, className = "", mobilePoster }: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  mobilePoster?: string;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const manual = useRef<boolean | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = video.current;
    const container = wrapper.current;
    if (!element || !container) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) element.pause();
      else if (manual.current === true || (manual.current === null && !preference.matches)) {
        void element.play().catch(() => {});
      }
    }, { threshold: 0.24 });
    observer.observe(container);
    function motionChanged() {
      if (preference.matches && manual.current !== true) element?.pause();
    }
    preference.addEventListener("change", motionChanged);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", motionChanged);
    };
  }, []);

  function toggle() {
    const element = video.current;
    if (!element) return;
    manual.current = element.paused;
    if (element.paused) void element.play().catch(() => {});
    else element.pause();
  }

  return <div className={`inline-video ${className}`} ref={wrapper}>
    <picture className="video-poster">
      {mobilePoster && <source media="(max-width: 650px)" srcSet={mobilePoster} />}
      <img src={poster} alt="" fetchPriority={className.includes("main-hero-media") ? "high" : undefined} />
    </picture>
    <video ref={video} src={src} poster={mobilePoster ? undefined : poster} muted playsInline loop preload="none" className={playing ? "video-playing" : ""} aria-label={label} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <button type="button" className="media-toggle icon-button" onClick={toggle} aria-label={`${label} ${playing ? "일시 정지" : "재생"}`}>
      {playing ? <span className="pause-icon" aria-hidden="true" /> : <Icon name="play" size={18} />}
    </button>
  </div>;
}
