import { ConsultationSection } from "@/components/Banners";
import FoodMenu from "@/components/FoodMenu";
import PhotoHero from "@/components/PhotoHero";

export const metadata = { title: "안주 메뉴" };

export default function FoodPage() {
  return <>
    <PhotoHero className="food-hero" label="Perfect food for fresh beer." title={<>맛도 가격도 잡은<br />압도적 안주 리스트</>} description="생맥주와 더 잘 어울리는 다이린의 안주 메뉴" />
    <section className="catalogue section-pad"><div className="shell"><FoodMenu /></div></section>
    <ConsultationSection mobileOnly />
  </>;
}
