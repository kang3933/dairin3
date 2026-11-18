import { ConsultationSection } from "./Banners";
import PhotoHero from "./PhotoHero";
import { Icon } from "./Icon";

const strengths = [
  ["직배송으로 간결한 공급", "제조사에서 매장으로 이어지는 직배송 구조를 운영합니다. 배송 조건은 희망 지역에 따라 상담 시 확인할 수 있습니다."],
  ["두 가지 베이스, 다양한 메뉴", "기린과 아사히 생맥주를 기본으로 아이스, 토마토, 유자 등 다양한 메뉴를 구성합니다."],
  ["첫 오픈 거품도 메뉴로 활용", "케그를 처음 연결할 때 나온 거품을 메뉴에 활용해 버려지는 양을 줄입니다."],
];

const costs = [
  ["가맹비", "상표 사용권 부여", "500만 원"],
  ["교육비", "운영 매뉴얼·레시피 및 현장 실습", "300만 원"],
  ["물류 보증금", "본사 공급 원재료에 대한 보증 예치금", "300만 원"],
  ["인테리어", "목공, 설비, 전기, 조명, 금속·유리 등", "평당 200만 원 · VAT 별도"],
  ["간판 및 외부 사인", "외부 간판·현판 및 시트 등", "매장별 상이"],
  ["기기 및 장비", "나마비루 전문 장비", "400만 원 · VAT 별도"],
];

export function Strengths() {
  return <section id="strengths" className="catalogue section-pad">
    <div className="shell"><p className="eyebrow">DAIRIN FRANCHISE</p><h2>다이린의 운영 방식</h2>
      <div className="strength-grid">
        {strengths.map(([title, description], index) => <article key={title}>
          <Icon name={["truck", "beer", "keg"][index]} size={30} />
          <h3>{title}</h3><p>{description}</p>
        </article>)}
      </div>
    </div>
  </section>;
}

export default function Franchise() {
  return <>
    <PhotoHero className="franchise-hero" label="FRANCHISE WITH DAIRIN" title={<>다이린과 함께<br />성장하세요.</>} description="좋은 맥주 한 잔을, 내 가게의 경쟁력으로." />
    <Strengths />
    <section id="costs" className="section-pad"><div className="shell">
      <p className="eyebrow">OPENING COST</p><h2>매장 개설 비용</h2>
      <p className="supporting">기존 창업 안내의 항목별 금액입니다. 실제 견적은 매장 면적과 기존 설비, 공사 범위에 따라 달라집니다.</p>
      <table className="cost-table"><thead><tr><th scope="col">구분</th><th scope="col">내용</th><th scope="col">금액</th></tr></thead><tbody>
        {costs.map(([label, description, amount]) => <tr key={label}><th scope="row">{label}</th><td>{description}</td><td>{amount}</td></tr>)}
      </tbody></table>
      <p className="catalog-note">임대 보증금·권리금 등 별도 비용은 매장별로 확인해 주세요.</p>
    </div></section>
    <section className="catalogue section-pad"><div className="shell">
      <h2>개설 절차</h2>
      <ol className="opening-steps">
        {["희망 지역과 운영 계획 상담", "상권과 매장 검토", "인테리어와 설비 준비", "운영 교육과 오픈"].map((step) => <li key={step}>{step}</li>)}
      </ol>
      <div className="faq">
        <h3>자주 묻는 질문</h3>
        <details><summary>희망 지역이 아직 정해지지 않았어요.</summary><p>상담의 희망 지역에서 ‘미정’을 선택하고, 지금 궁금한 점부터 남겨 주세요.</p></details>
        <details><summary>기존 매장에서 업종을 변경할 수 있나요?</summary><p>현재 매장의 면적과 설비를 확인한 뒤 전환 범위와 필요한 공사를 상담할 수 있습니다.</p></details>
        <details><summary>운영 중인 매장을 먼저 보고 싶어요.</summary><p><a href="/about/branches/">매장 안내</a>에서 가까운 지점과 지도 위치를 확인할 수 있습니다.</p></details>
      </div>
    </div></section>
    <ConsultationSection background />
  </>;
}
