"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

const links = [
  ["/about/aboutdairin/", "다이린 회사소개"],
  ["/menu/beer/", "맥주 메뉴"],
  ["/menu/new/", "안주 메뉴"],
  ["/about/branches/", "지점 찾기"],
  ["/contact/open/", "지점 개설"],
  ["/contact/consultation/", "지점 상담 신청"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("keydown", closeWithEscape);
    return () => document.removeEventListener("keydown", closeWithEscape);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">본문 바로가기</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="/" aria-label="다이린 홈" className="brand-logo"><img src="/images/dairinlogo.png" width="1361" height="599" alt="DAIRIN" /></a>
          <button ref={trigger} className="menu-toggle icon-button" type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={27} /></button>
          <nav id="primary-navigation" aria-label="주 메뉴" className="primary-nav" hidden={!open}>
            {links.map(([href, label]) => <a key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}<Icon name="diagonal" size={15} /></a>)}
          </nav>
        </div>
      </header>
    </>
  );
}
