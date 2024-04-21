import FrecuentlyAskedQuestions from "@/Components/Home/FrecuentlyAskedQuestions";
import HeroVideo from "@/Components/Home/HeroVideo";
import IdealTrips from "@/Components/Home/IdealTrips";
import OurDestinations from "@/Components/Home/OurDestinations";
import OurHistory from "@/Components/Home/OurHistory";
import Testimonials from "@/Components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
        <HeroVideo />
        <OurHistory/>
        <IdealTrips/>
        <OurDestinations/>
        <FrecuentlyAskedQuestions/>
        <Testimonials/>
    </main>
  );
}
