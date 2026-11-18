import { PageIntro } from "@/components/UI";

export const metadata = { title: "이용약관" };
export default function Terms() {
  return <>
    <PageIntro label="사이트 이용 안내" title="이용약관" description="다이린 비공개 검토 사이트의 이용 안내입니다." />
    <div className="shell legal-copy"><h2>매장과 메뉴 정보</h2><p>메뉴와 가격은 매장에 따라 다를 수 있습니다. 방문 전 지도에 표시된 영업정보를 확인해 주세요.</p><h2>가맹 상담</h2><p>상담 신청은 가맹 문의를 전달하기 위한 절차입니다. 계약과 견적은 매장 조건을 검토한 후 별도로 협의합니다.</p></div>
  </>;
}
