import { MenuStateProps } from "./navigation-types";

export default function MobileMenuBtn({
  menuOpen,
  setMenuOpen,
}: MenuStateProps) {
  return (
    <button
      className="self-center flex ml:hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      onClick={() => setMenuOpen(true)}
      aria-label="Open navigation menu"
      aria-expanded={menuOpen}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect y="3" width="20" height="2" rx="1" />
        <rect y="9" width="20" height="2" rx="1" />
        <rect y="15" width="20" height="2" rx="1" />
      </svg>
    </button>
  );
}
