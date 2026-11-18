import BranchDirectory from "@/components/BranchDirectory";
import PhotoHero from "@/components/PhotoHero";

export const metadata = { title: "매장 안내" };

export default function BranchesPage() {
  return <>
    <PhotoHero className="branches-hero" label="BRANCHES" title={<>좋은 맥주 한 잔,<br />생각보다 가까이에.</>} description="오늘 만날 다이린을 찾아보세요." />
    <section className="catalogue section-pad"><div className="shell"><BranchDirectory /></div></section>
  </>;
}
