import { ConsultationSection } from "@/components/Banners";
import Catalogue from "@/components/Catalogue";
import PhotoHero from "@/components/PhotoHero";

export const metadata = { title: "맥주 메뉴" };

export default function BeerPage() {
  return <>
    <PhotoHero className="beer-hero" label="A better glass of beer." title={<>시원함이 다르다,<br />다이린 생맥주.</>} description="첫 모금부터 마지막 한 잔까지, 오늘의 맥주를 만나보세요." />
    <section className="catalogue section-pad">
      <div className="shell">
        <div className="catalogue-heading">
          <p className="eyebrow">Two beers, endless possibilities.</p>
          <h2>좋은 한 잔에서 시작하는<br />다양한 취향.</h2>
          <p>기린과 아사히 생맥주를 시작으로, 토마토와 유자,<br className="pc-break" /> 아이스 맥주까지 오늘의 기분에 맞는 한 잔을 골라보세요.</p>
        </div>
        <Catalogue />
      </div>
    </section>
    <ConsultationSection mobileOnly />
  </>;
}
