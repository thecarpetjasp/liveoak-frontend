import About from "./(about)/About";
import Contact from "./(contact)/Contact";
import Hero from "./(hero)/Hero";
import Overview from "./(overview)/Overview";

export default function Home() {
  return (
    <main className="relative z-10 bg-background">
      <Hero></Hero>
      <Overview></Overview>
      <About></About>
      <Contact></Contact>
    </main>
  );
}
