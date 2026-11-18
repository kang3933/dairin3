import { PageIntro, TextLink } from "@/components/UI";

export default function NotFound() {
  return <PageIntro label="404" title="페이지를 찾을 수 없어요." description="주소를 확인하거나 다이린의 첫 화면에서 다시 시작해보세요."><TextLink href="/">다이린 홈으로</TextLink></PageIntro>;
}
