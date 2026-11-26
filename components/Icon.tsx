import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  arrow: <><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>,
  diagonal: <><path d="M6 18 18 6"/><path d="M8 6h10v10"/></>,
  left: <path d="m15 5-7 7 7 7"/>,
  right: <path d="m9 5 7 7-7 7"/>,
  down: <path d="m5 9 7 7 7-7"/>,
  menu: <><path d="M4 8h16"/><path d="M4 16h16"/></>,
  close: <><path d="m5 5 14 14"/><path d="M19 5 5 19"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></>,
  play: <path d="m9 5 11 7-11 7Z" fill="currentColor" stroke="none"/>,
  search: <><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4 4"/></>,
  keg: <><rect x="6" y="4" width="12" height="16" rx="3"/><path d="M6 8h12M6 16h12M10 4V2h4v2"/></>,
  truck: <><path d="M3 5h12v12H3zM15 10h4l3 3v4h-7"/><circle cx="7" cy="18" r="2" fill="var(--icon-bg, white)"/><circle cx="18" cy="18" r="2" fill="var(--icon-bg, white)"/></>,
  beer: <><path d="M5 7h12v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2ZM17 10h4v5a2 2 0 0 1-2 2h-2M5 7a3 3 0 0 1 4-3 3 3 0 0 1 5 0 3 3 0 0 1 3 3M9 11v6m4-6v6"/></>,
  check: <path d="m4 13 5 5L20 7"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  instagram: (
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </>
  ),
  headset: (
    <>
      <path d="M4 13v-2a8 8 0 1 1 16 0v2M20 17v1a3 3 0 0 1-3 3h-4" />
      <rect x="3" y="11" width="4" height="7" rx="2" />
      <rect x="17" y="11" width="4" height="7" rx="2" />
    </>
  ),
  plus: <><path d="M5 12h14M12 5v14"/></>,
};

export function Icon({ name, size = 20 }: { name: keyof typeof paths; size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
