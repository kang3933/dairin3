import { Icon } from "./Icon";
import ConsultationForm from "./ConsultationForm";

export function ConsultationSection({ background = false, mobileOnly = false }: { background?: boolean; mobileOnly?: boolean }) {
  return <section id="consultation" className={`consultation-section ${background ? "consultation-background" : ""} ${mobileOnly ? "mobile-only-consult" : ""}`}>
    <div className="shell consultation-layout">
      <h2>지금 바로<br />다이린과 함께하세요!</h2>
      <ConsultationForm />
    </div>
  </section>;
}

export function FranchiseBanner() {
  return <section className="franchise-banner">
    <div className="shell franchise-banner-inner">
      <div>
        <h2>맥주의 매력은 살리고,<br />운영의 부담은 줄이고.</h2>
        <p>손님이 즐기는 한 잔부터 사장님의 매장 운영까지.<br className="pc-break" /> 다이린은 맥주를 중심으로 장사의 기본을 생각합니다.</p>
        <a className="button" href="/about/strength/">다이린 창업 경쟁력 보기 <Icon name="arrow" size={16} /></a>
      </div>
    </div>
  </section>;
}
