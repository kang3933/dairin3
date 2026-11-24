import { ConsultationSection, FranchiseBanner } from "@/components/Banners";
import { Icon } from "@/components/Icon";
import InlineVideo from "@/components/InlineVideo";

const dishes = [
  ["sausage", "소세지 야끼"],
  ["hamburg", "함박카츠"],
  ["grilledfish", "토리야끼"],
];

export default function HomePage() {
  return <>
    <section className="main-hero">
      <InlineVideo src="/videos/dairin-hero.mp4" poster="/images/main-poster.webp" mobilePoster="/images/pub-night.webp" label="다이린 메인 영상" className="main-hero-media" />
      <div className="shell main-hero-content">
        <h1>안녕하세요<br />달라도 다이린입니다.</h1>
        <div className="actions">
          <a className="button button-yellow" href="/about/branches/">가까운 다이린 찾기 <Icon name="arrow" size={17} /></a>
          <a className="button button-glass" href="#consultation">창업 문의 <Icon name="arrow" size={17} /></a>
        </div>
      </div>
    </section>
    <section className="home-beer section-pad">
      <div className="shell home-beer-layout">
        <div className="home-beer-copy">
          <h2>맥주에 진심인 집, 다이린.</h2>
          <p>좋은 한 잔은 담는 과정에서 완성됩니다.</p>
        </div>
        <InlineVideo src="/videos/dairin-beer.mp4" poster="/images/pour-poster.webp" label="다이린 생맥주 영상" className="home-beer-media" />
        <a className="button home-beer-link" href="/menu/beer/">다이린 맥주 보기 <Icon name="arrow" size={16} /></a>
      </div>
    </section>
    <section className="home-food section-pad">
      <div className="shell">
        <div className="home-food-copy">
          <h2>취향대로 한 잔,<br />입맛대로 한 입.</h2>
          <p>맛있는 맥주와 함께 즐기는 다이린의 맛있는 안주.</p>
        </div>
        <div className="featured-dishes" aria-label="대표 안주">
          {dishes.map(([src, name]) => <a key={src} href={`/menu/new/#food-${src === "grilledfish" ? "toriyaki" : src}`} aria-label={`${name} 메뉴 보기`}><img src={`/images/${src}.webp`} loading="lazy" alt={name} /></a>)}
        </div>
        <a className="button home-food-link" href="/menu/new/">다이린 안주 메뉴 보기 <Icon name="arrow" size={16} /></a>
      </div>
    </section>
    <FranchiseBanner />
    <ConsultationSection background />
  </>;
}
