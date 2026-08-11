import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-between py-2 container-padding">
        <h1>LiveOak e-NG</h1>
        <ThemeToggle />
      </nav>
    </header>
  );
}
