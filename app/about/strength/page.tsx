import { Strengths } from "@/components/Franchise";
import { ConsultationSection } from "@/components/Banners";
import PhotoHero from "@/components/PhotoHero";
import { TextLink } from "@/components/UI";

export const metadata = { title: "다이린의 창업 경쟁력" };

export default function StrengthPage() {
  return <>
    <PhotoHero className="beer-hero" label="THE DAIRIN DIFFERENCE" title={<>더 가볍게 운영하고,<br />더 오래 함께하도록.</>} description="좋은 맥주의 매력을 매장 운영의 기본으로 삼습니다." />
    <Strengths />
    <div className="shell section-pad"><TextLink href="/contact/open/#costs">매장 개설 비용 및 절차 보기</TextLink></div>
    <ConsultationSection background />
  </>;
}
