"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icon";

const selection = {
  kirin: {
    logo: "/images/kirinwhite.png",
    intro: "기린 이치방 생맥주",
    products: [
      { name: "기린 후레시 나마비루", image: "/images/kirin-fresh.webp" },
      { name: "기린 아이스 나마비루", image: "/images/kirin-ice.png" },
      { name: "기린 프로즌 나마비루", image: "/images/kirin-frozen.png" },
      { name: "기린 토마토 비어볼", image: "/images/kirin-tomato.png" },
      { name: "기린 레몬유자 비어볼", image: "/images/kirin-yuzu.webp" },
    ],
  },
  asahi: {
    logo: "/images/asahi-white.webp",
    intro: "아사히 슈퍼드라이 생맥주",
    products: [
      { name: "아사히 후레시 나마비루", image: "/images/asahi-fresh.png" },
      { name: "아사히 블랙 후레시 나마비루", image: "/images/asahi-dark.webp" },
      { name: "아사히 아이스 나마비루", image: "/images/asahi-ice.webp" },
      { name: "아사히 블랙 아이스 나마비루", image: "/images/asahi-blackice.png" },
      { name: "아사히 레몬유자 비어볼", image: "/images/asahi-beerball.png" },
    ],
  },
};

export default function Catalogue() {
  const [brand, setBrand] = useState<keyof typeof selection>("kirin");
  const [position, setPosition] = useState(0);
  const touchStart = useRef<number | null>(null);
  const { products, logo, intro } = selection[brand];

  function productAt(step: number) {
    return products[((step % products.length) + products.length) % products.length];
  }

  function move(direction: -1 | 1) {
    setPosition((step) => step + direction);
  }

  function changeBrand(value: keyof typeof selection) {
    setBrand(value);
    setPosition(0);
  }

  return <>
    <div className="filters" role="group" aria-label="맥주 브랜드">
      <button type="button" aria-pressed={brand === "kirin"} onClick={() => changeBrand("kirin")}>기린 KIRIN</button>
      <button type="button" aria-pressed={brand === "asahi"} onClick={() => changeBrand("asahi")}>아사히 ASAHI</button>
    </div>
    <div className="beer-showcase">
      <div className="beer-brand">
        <img src={logo} alt={brand === "kirin" ? "KIRIN" : "Asahi Super Dry"} />
        <strong>{intro}</strong>
        <span>JAPANESE DRAFT BEER</span>
      </div>
      <div className="beer-gallery" role="region" aria-label="생맥주 캐러셀" onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
        <div className="beer-stage" onTouchStart={(event) => {
          touchStart.current = event.changedTouches[0].clientX;
        }} onTouchEnd={(event) => {
          const initial = touchStart.current;
          touchStart.current = null;
          if (initial === null) return;
          const distance = event.changedTouches[0].clientX - initial;
          if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
        }}>
          {[-2, -1, 0, 1, 2].map((offset) => {
            // Keep each slide mounted as it moves between the visible slots.
            const step = position + offset;
            const product = productAt(step);
            return <div key={`${brand}:${step}`} className="beer-figure" data-offset={offset} aria-hidden={offset !== 0}>
              <img src={product.image} alt={offset === 0 ? product.name : ""} draggable="false" />
            </div>;
          })}
        </div>
        <div className="gallery-controls">
          <button className="icon-button" type="button" aria-label="이전 맥주" onClick={() => move(-1)}><Icon name="left" size={19} /></button>
          <p aria-live="polite"><span className="beer-caption" key={`${brand}:${position}`}>{productAt(position).name}</span></p>
          <button className="icon-button" type="button" aria-label="다음 맥주" onClick={() => move(1)}><Icon name="right" size={19} /></button>
        </div>
      </div>
    </div>
    <p className="catalog-note">판매 메뉴는 지점별로 다를 수 있습니다.</p>
  </>;
}
