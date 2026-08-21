import About from "./(about)/About";
import Contact from "./(contact)/Contact";
import EngProcessV3 from "./(eng-process)/EngProcessV3";
import Hero from "./(hero)/Hero";
import LiveOakAtAGlance from "./(live-oak-at-a-glance)/LiveOakAtAGlance";
import Location from "./(location)/Location";
import News from "./(news)/News";
import Overview from "./(overview)/Overview";

export default function Home() {
  return (
    <main className="relative z-10 bg-background">
      <Hero></Hero>
      <LiveOakAtAGlance></LiveOakAtAGlance>
      <Overview></Overview>
      <About></About>
      <EngProcessV3></EngProcessV3>
      <News></News>
      <Contact></Contact>
      <Location></Location>
    </main>
  );
}
