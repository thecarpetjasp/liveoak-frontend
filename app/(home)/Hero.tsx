import HeroDetail from "./HeroDetail";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[calc(100vh-56px)] isolate flex items-center justify-center container-padding"
    >
      <HeroImage></HeroImage>
      <HeroDetail></HeroDetail>
    </section>
  );
}
