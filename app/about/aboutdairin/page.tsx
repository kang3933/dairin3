import InlineVideo from "@/components/InlineVideo";

export const metadata = { title: "다이린 회사소개" };

const milestones = [
  ["2025", "다이린의 시작.", "브랜드 론칭과 부산에서의 첫걸음."],
  ["2025–2026", "함께하는 공간의 확장.", "부산과 경남을 중심으로 지점을 넓혀갑니다."],
  ["2026", "전국으로 이어지는 이야기.", "서울 진출과 더 많은 지역에서의 새로운 만남."],
];

export default function AboutPage() {
  return <>
    <section className="about-hero">
      <div className="shell about-hero-grid">
        <div className="about-hero-copy">
          <p className="eyebrow">DAIRIN’S STORY</p>
          <h1>다이린은<br />하루하루<br />성장 중입니다.</h1>
          <p>좋은 맥주 한 잔에서 시작한, 더 큰 가능성의 이야기</p>
        </div>
        <InlineVideo src="/videos/dairin-about-color.mp4" poster="/images/about-color-poster.webp" label="다이린 로고 영상" className="about-video" />
      </div>
    </section>
    <section className="about-overview section-pad">
      <div className="shell about-grid">
        <div>
          <p className="eyebrow about-label">BRAND STORY &amp; OVERVIEW</p>
          <h2>좋은 한 잔을,<br />더 많은 고객에게.</h2>
          <p>다이린은 2025년 시작한 맥주 전문 주점입니다. 기린과 아사히 생맥주를 중심으로 일본식 다이닝의 분위기를 담았습니다.</p>
          <p>생맥주와 만원 초반대의 안주를 함께 즐길 수 있는, 누구나 편하게 들르는 공간을 만듭니다.</p>
        </div>
        <div className="about-photos">
          <img src="/images/pour-poster.webp" alt="다이린에서 따르는 한 잔의 기린 생맥주" loading="lazy" />
          <img src="/images/pub-room.webp" alt="따뜻한 조명의 다이린 매장 내부" loading="lazy" />
        </div>
      </div>
    </section>
    <section className="about-history section-pad">
      <div className="shell about-grid">
        <div>
          <p className="eyebrow about-label">BRAND HISTORY</p>
          <h2>부산의 한 공간에서,<br />더 많은 동네로.</h2>
          <img className="history-art" src="/images/store-illustration.webp" alt="다이린 매장들의 정면을 그린 노란색 일러스트" loading="lazy" />
        </div>
        <ol className="timeline">
          {milestones.map(([year, title, text]) => <li key={year}><div className="timeline-dot" aria-hidden="true" /><div><h3>{year}</h3><strong>{title}</strong><p>{text}</p></div></li>)}
        </ol>
      </div>
    </section>
    <section className="about-business section-pad">
      <div className="shell about-grid">
        <div>
          <p className="eyebrow about-label">BUSINESS MODEL</p>
          <h2>복잡함은 덜고,<br />가능성은 남깁니다.</h2>
          <p>제조사에서 매장으로 이어지는 직배송과 두 가지 생맥주 베이스. 케그를 처음 열 때 나온 거품도 메뉴에 활용하며, 매장 운영의 기본부터 효율을 생각합니다.</p>
        </div>
        <img src="/images/business-model.webp" alt="두 가지 맥주 베이스, 매장 직배송, 첫 오픈 거품 활용을 보여주는 다이린 바" width="1884" height="1060" loading="lazy" />
      </div>
    </section>
    <section className="about-vision section-pad">
      <div className="shell">
        <p className="eyebrow about-label">DAIRIN’S VISION</p>
        <h2>함께 성장하는,<br />오래 사랑받는 공간.</h2>
        <p>손님에게는 다시 찾고 싶은 한 잔을, 점주에게는 오래 운영할 수 있는 매장을 함께 만들어갑니다.</p>
      </div>
    </section>
  </>;
}
