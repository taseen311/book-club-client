import ReadingCommunity from "../components/Community";
import HeroSlider from "../components/Hero";
import LatestBooks from "../components/Latest";
import WhyChooseUs from "../components/WhyChoose";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <LatestBooks />
      <WhyChooseUs />
      <ReadingCommunity />
    </div>
  );
}
