import { PageIntro } from "@/components/UI";

export const metadata = { title: "개인정보처리방침" };
export default function Privacy() {
  return <>
    <PageIntro label="개인정보 안내" title="개인정보 수집·이용 안내" description="이 페이지는 다이린 비공개 검토 사이트의 상담 양식에 적용됩니다." />
    <div className="shell legal-copy">
      <h2>수집 항목과 사용 목적</h2><p>가맹 문의를 접수하고 상담에 필요한 내용을 확인하기 위해 성함, 휴대폰 번호, 창업 희망 지역, 동의 일시와 접수번호를 저장합니다. 희망 맥주와 문의 내용은 선택 사항입니다.</p>
      <h2>저장과 열람</h2><p>접수 내용은 검토 사이트의 별도 데이터베이스에 저장되고 사이트 소유자가 확인할 수 있습니다. 비공개 검토가 끝나면 검토용 접수 기록은 운영자가 정리합니다.</p>
      <h2>동의와 삭제 요청</h2><p>동의는 선택할 수 있으며, 동의하지 않으면 이 양식으로 상담을 신청할 수 없습니다. 정정 또는 삭제가 필요한 경우 검토 링크를 제공한 운영자에게 접수번호를 알려 주세요.</p>
    </div>
  </>;
}
