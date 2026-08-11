import NavBar from "@/components/navigation/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <section id="home" className="h-screen">
        This is the Home section
      </section>
      <section id="about" className="h-screen">
        This is the About section
      </section>
      <section id="services" className="h-screen">
        This is the Services section
      </section>
      <section id="contact" className="h-screen">
        This is the Contact section
      </section>
    </main>
  );
}
