export default function Header() {
  return (
    <header className="animate-fade-up flex items-center justify-between px-8 py-4 lg:px-[120px]">
      <button className="font-body text-2xl font-medium tracking-wide text-cream transition-opacity duration-300 hover:opacity-70 lg:text-[32px]">
        MENU
      </button>
      <div className="text-lg font-medium lg:text-2xl">
        <span className="cursor-pointer text-cream transition-opacity duration-300 hover:opacity-70">
          PT{" "}
        </span>
        <span className="cursor-pointer text-cream/60 transition-opacity duration-300 hover:opacity-100">
          / EN
        </span>
      </div>
    </header>
  );
}
