"use client";

import { useState } from "react";
import { foodItems, type FoodItem } from "@/lib/site-data";
import Dialog from "./Dialog";
import { Icon } from "./Icon";

const categories = ["전체", ...new Set(foodItems.map((item) => item.category))];
const menuOrder = ["squid", "shrimp", "sausage", "pizza"];
const ordered = [
  ...menuOrder.flatMap((id) => foodItems.filter((item) => id === item.id)),
  ...foodItems.filter((item) => !menuOrder.includes(item.id)),
];
const price = (item: FoodItem) => item.price.toLocaleString("ko-KR") + "원";
const normalized = (value: string) => value.toLowerCase().replace(/\s/g, "");

export default function FoodMenu() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const [selected, setSelected] = useState<FoodItem | null>(null);
  const results = ordered.filter((item) =>
    (category === "전체" || item.category === category) &&
    normalized(item.name).includes(normalized(query)));

  return <>
    <div className="listing-heading">
      <div><p className="eyebrow">FOOD MENU</p><h2>오늘은 어떤 한 접시?</h2></div>
      <label className="search"><Icon name="search" size={17} /><span className="sr-only">메뉴 이름 검색</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="메뉴 이름 검색" /></label>
    </div>
    <div className="filters food-filters" role="group" aria-label="안주 종류">
      {categories.map((item) => <button key={item} type="button" aria-pressed={item === category} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <p className="sr-only" aria-live="polite">{results.length}가지 메뉴</p>
    {!results.length && <div className="empty"><p>검색한 메뉴가 없어요.</p><button className="button" onClick={() => { setQuery(""); setCategory("전체"); }}>전체 메뉴 보기</button></div>}
    <div className="food-grid">
      {results.map((item) => <button className="food-card" key={item.id} type="button" id={`food-${item.id}`} onClick={() => setSelected(item)} aria-haspopup="dialog">
        <div className="food-card-image">
          <img src={item.image} alt="" loading="lazy" />
          {item.tag && <span className={`food-tag ${item.tag.toLowerCase()}`}>{item.tag}</span>}
        </div>
        <p>{item.category}</p>
        <h3>{item.name}</h3>
        <span className="food-price">{price(item)}</span>
      </button>)}
    </div>
    <p className="catalog-note">메뉴와 가격은 지점에 따라 달라질 수 있습니다.</p>
    <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} labelledBy="food-detail-title">
      {selected && <>
        <img className="dialog-photo" src={selected.image} alt={selected.name} />
        <div className="dialog-copy"><p className="eyebrow">{selected.category}</p><h2 id="food-detail-title">{selected.name}</h2><p className="food-price">{price(selected)}</p><p>판매 여부는 방문하실 매장에서 확인해 주세요.</p></div>
      </>}
    </Dialog>
  </>;
}
