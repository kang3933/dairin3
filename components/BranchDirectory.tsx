"use client";

import { useRef, useState } from "react";
import { branches, mapUrl, type Branch } from "@/lib/site-data";
import Dialog from "./Dialog";
import { Icon } from "./Icon";

const regions = ["전체", "부산", "서울", "충남", "전북", "경남"];
const clean = (term: string) => term.toLowerCase().replace(/\s+/g, "");

export default function BranchDirectory() {
  const [region, setRegion] = useState("전체");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Branch | null>(null);
  const [photo, setPhoto] = useState(0);
  const touch = useRef<number | null>(null);
  const visible = branches.filter((branch) => (region === "전체" || branch.region === region) &&
    clean(`${branch.name} ${branch.region} ${branch.area} ${branch.address ?? ""}`).includes(clean(query)));
  const total = active?.images.length ?? 0;

  function advance(direction: number) {
    setPhoto((value) => (value + direction + total) % total);
  }

  return <>
    <h2>우리 동네 다이린</h2>
    <label className="search branch-search"><Icon name="search" size={17} /><span className="sr-only">지역 또는 지점명 검색</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="지역 또는 지점명 검색" /></label>
    <div className="filters" role="group" aria-label="지역 선택">
      {regions.map((item) => <button type="button" key={item} aria-pressed={item === region} onClick={() => setRegion(item)}>{item} <span>{item === "전체" ? branches.length : branches.filter((branch) => branch.region === item).length}</span></button>)}
    </div>
    <p className="sr-only" aria-live="polite">{visible.length}개 지점</p>
    {!visible.length && <div className="empty"><p>일치하는 지점이 없어요.</p><button className="button" onClick={() => { setQuery(""); setRegion("전체"); }}>전체 지점 보기</button></div>}
    <div className="branch-grid">
      {visible.map((branch) => <button className="branch-card" type="button" key={branch.id} aria-haspopup="dialog" aria-label={`${branch.name} 지점 정보 보기`} onClick={() => { setPhoto(0); setActive(branch); }}>
        <span className="branch-card-copy">
          <span className="region-label">{branch.region}</span>
          <span className="branch-name">{branch.cardName ?? branch.name}</span>
          <span className="branch-cta">지점 정보 보기</span>
        </span>
        <span className="branch-card-visual" aria-hidden="true">
          {branch.images.length > 0 ? <img className="branch-art" src={branch.images[0]} alt="" loading="lazy" decoding="async" /> : <Icon name="pin" size={108} />}
        </span>
      </button>)}
    </div>
    <Dialog open={Boolean(active)} onClose={() => setActive(null)} labelledBy="branch-detail-title">
      {active && <>
        {total > 0 && <div className="branch-gallery" onTouchStart={(event) => { touch.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => {
          const start = touch.current;
          touch.current = null;
          if (start === null || total < 2) return;
          const delta = start - event.changedTouches[0].clientX;
          if (Math.abs(delta) > 40) advance(Math.sign(delta));
        }}>
          <img className="dialog-photo branch-detail-photo" src={active.images[photo]} alt={`${active.name} 일러스트 ${photo + 1}`} />
          {total > 1 && <div className="gallery-controls"><button className="icon-button" type="button" aria-label="이전 지점 이미지" onClick={() => advance(-1)}><Icon name="left" /></button><p aria-live="polite">{photo + 1} / {total}</p><button className="icon-button" type="button" aria-label="다음 지점 이미지" onClick={() => advance(1)}><Icon name="right" /></button></div>}
        </div>}
        <div className="dialog-copy">
          <p className="eyebrow">{active.region} · {active.area}</p>
          <h2 id="branch-detail-title">{active.name}</h2>
          {active.address && <p>{active.address}</p>}
          <p>영업시간과 연락처는 지도에서 확인해 주세요.</p>
          <a className="button button-yellow" href={mapUrl(active)} target="_blank" rel="noopener noreferrer">네이버 지도에서 보기 <Icon name="diagonal" size={16} /></a>
        </div>
      </>}
    </Dialog>
  </>;
}
