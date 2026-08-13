import About from "./(about)/About";
import Contact from "./(contact)/Contact";
import Hero from "./(hero)/Hero";
import Location from "./(location)/Location";
import News from "./(news)/News";
import Overview from "./(overview)/Overview";

export default function Home() {
  return (
    <main className="relative z-10 bg-background">
      <Hero></Hero>
      <Overview></Overview>
      <About></About>
      <News></News>
      <Contact></Contact>
      <Location></Location>
    </main>
  );
}
