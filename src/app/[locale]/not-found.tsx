import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-display text-[26px] text-brown lg:text-[30px]">casa amani</p>
      <h1 className="mt-10 font-display text-3xl text-brown md:text-4xl">
        This page is not here.
      </h1>
      <p className="mt-4 max-w-md leading-7 text-brown/70">
        The house is. Start again from one of these.
      </p>
      <nav aria-label="Helpful links" className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-brown underline">
        <Link href="/en" className="transition-colors hover:text-brown/70">Home</Link>
        <Link href="/en/house" className="transition-colors hover:text-brown/70">The house</Link>
        <Link href="/en/the-guide" className="transition-colors hover:text-brown/70">The guide</Link>
        <Link href="/en/faq" className="transition-colors hover:text-brown/70">FAQ</Link>
      </nav>
      <p className="mt-10 text-sm text-brown/60">
        Looking for something specific?{" "}
        <a href="mailto:stay@casa-amani.com" className="underline transition-colors hover:text-brown">
          stay@casa-amani.com
        </a>
      </p>
    </main>
  );
}
