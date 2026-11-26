import { PageIntro, TextLink } from "@/components/UI";
import styles from "../legal.module.css";

export const metadata = { title: "개인정보처리방침" };

// 운영자가 공개용 담당자 정보와 접수 연락처를 입력합니다.
const privacyContact = {
  name: "",
  department: "",
  phone: "",
  email: "",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        label="PRIVACY POLICY"
        title="개인정보처리방침"
        description="다이린 지점 상담 문의에 필요한 개인정보를 어떻게 처리하는지 안내합니다."
      />
      <article className={`shell ${styles.document}`} aria-label="다이린 개인정보처리방침">
        <p className={styles.date}>시행일 <time dateTime="2026-10-01">2026년 10월 1일</time></p>
        <p>다이린(이하 “회사”)은 개인정보 보호법 제30조에 따라 웹사이트 이용자의 개인정보 처리에 관한 사항을 다음과 같이 공개합니다.</p>

        <section>
          <h2>제1조 (개인정보 처리 목적)</h2>
          <p>회사는 지점 문의와 가맹 상담을 접수하고, 신청 내용을 검토하며, 신청자에게 연락해 상담에 필요한 사항과 진행 결과를 안내하기 위해 개인정보를 처리합니다.</p>
          <p>처리 목적을 변경하는 경우 관계 법령에 따라 별도의 동의를 받는 등 필요한 조치를 합니다.</p>
        </section>

        <section>
          <h2>제2조 (처리 및 보유 기간)</h2>
          <p>지점 문의 및 가맹 상담 내역은 상담 완료 후 3개월까지 보관합니다. 관계 법령에 따라 별도의 보존 의무가 있는 정보는 해당 법령에서 정한 항목과 기간에 한해 보관합니다.</p>
        </section>

        <section>
          <h2>제3조 (정보주체의 권리와 행사 방법)</h2>
          <p>이용자는 개인정보의 열람, 정정, 삭제 및 처리정지를 요구하거나 수집·이용 동의를 철회할 수 있습니다.</p>
          <p>본인 또는 적법한 대리인은 <a href="#privacy-contact">개인정보 보호 담당 연락처</a>를 통해 요청할 수 있습니다. 회사는 관계 법령에 따라 본인 또는 대리인 여부를 확인한 뒤 요청을 처리합니다.</p>
        </section>

        <section>
          <h2>제4조 (처리하는 개인정보 항목)</h2>
          <ul>
            <li><strong>필수 입력</strong> 성함, 휴대폰 번호, 창업 희망 지역</li>
            <li><strong>선택 입력</strong> 희망 맥주 종류, 문의 내용</li>
            <li><strong>접수 기록</strong> 개인정보 수집·이용 동의 여부, 접수 시각, 접수번호</li>
          </ul>
          <p>이용자는 개인정보 수집·이용에 동의하지 않을 수 있습니다. 필수 정보 처리에 동의하지 않으면 이 양식을 통한 상담 접수가 제한되며, 선택 정보는 입력하지 않아도 상담을 신청할 수 있습니다.</p>
        </section>

        <section>
          <h2>제5조 (파기 절차 및 방법)</h2>
          <p>보유기간이 지나거나 처리 목적을 달성한 정보는 지체 없이 파기합니다. 관계 법령에 따라 계속 보존해야 하는 정보는 다른 접수 기록과 구분하여 관리합니다.</p>
          <p>전자적으로 보관한 기록은 복구하기 어려운 방법으로 삭제합니다. 종이로 보관한 자료가 있는 경우 분쇄 등으로 파기합니다.</p>
        </section>

        <section>
          <h2>제6조 (안전성 확보 조치)</h2>
          <p>회사는 개인정보에 대한 접근을 상담 처리에 필요한 담당자로 제한하고, 관계 법령이 정하는 관리적·기술적·물리적 보호조치를 적용합니다.</p>
        </section>

        <section>
          <h2>제7조 (자동 수집 장치와 브라우저 설정)</h2>
          <p>지점 상담 양식의 개인정보는 이용자가 입력하고 제출할 때 전송됩니다. 브라우저 설정에서 쿠키의 저장을 제한하거나 기존 쿠키를 삭제할 수 있습니다.</p>
          <p>지도 등 외부 서비스의 링크를 이용하면 해당 서비스의 개인정보처리방침이 적용됩니다.</p>
        </section>

        {/* 운영 환경의 위탁 또는 국외 이전이 확인되면 실제 업체, 업무, 이전 조건을 반영합니다. */}
        <section>
          <h2>제8조 (개인정보의 제공 및 처리위탁)</h2>
          <p>회사는 관계 법령에 근거가 있거나 정보주체의 별도 동의를 받은 경우 그 범위에서 개인정보를 제3자에게 제공합니다. 개인정보 처리를 위탁하거나 국외로 이전하는 경우에는 관계 법령에 따른 사항을 공개합니다.</p>
        </section>

        <section id="privacy-contact">
          <h2>제9조 (개인정보 보호책임자 및 열람청구)</h2>
          <p>개인정보 열람·정정·삭제 요청이나 개인정보 보호 관련 고충은 아래 담당자 또는 담당부서에 접수할 수 있습니다.</p>
          <dl className={styles.contact}>
            <dt>개인정보 보호책임자</dt>
            <dd>{privacyContact.name}</dd>
            <dt>담당 부서</dt>
            <dd>{privacyContact.department}</dd>
            <dt>전화번호</dt>
            <dd>{privacyContact.phone && <a href={`tel:${privacyContact.phone}`}>{privacyContact.phone}</a>}</dd>
            <dt>이메일</dt>
            <dd>{privacyContact.email && <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>}</dd>
          </dl>
        </section>

        <section>
          <h2>제10조 (권익침해 구제 방법)</h2>
          <p>개인정보 침해에 대한 상담이나 분쟁 해결은 다음 기관에 문의할 수 있습니다.</p>
          <ul>
            <li>
              <a href="https://privacy.kisa.or.kr/">개인정보 침해신고센터</a> (<a href="tel:118">118</a>)
            </li>
            <li>
              <a href="https://www.kopico.go.kr/">개인정보 분쟁조정위원회</a> (<a href="tel:18336972">1833-6972</a>)
            </li>
          </ul>
        </section>

        <section>
          <h2>제11조 (처리방침의 시행 및 변경)</h2>
          <p>이 방침은 <time dateTime="2026-10-01">2026년 10월 1일</time>부터 적용됩니다. 처리방침을 변경하는 경우 사이트에서 변경 내용과 적용일을 안내합니다.</p>
        </section>

        <nav className={styles.links} aria-label="관련 페이지">
          <TextLink href="/terms/">이용약관</TextLink>
          <TextLink href="/contact/consultation/">지점 상담 화면으로</TextLink>
        </nav>
      </article>
    </>
  );
}
