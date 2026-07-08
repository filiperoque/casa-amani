/**
 * Editorial pull quote: repeats a verbatim line from the page's own
 * copy, set large in the display face, breaking the prose column
 * asymmetrically on desktop. Never fabricate content for it; only
 * lines that already exist on the page. Editorial pages only.
 */
export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <figure
      aria-hidden="true"
      className="my-12 border-l border-brown/20 py-2 pl-6 lg:my-16 lg:-ml-24"
    >
      <p className="font-display text-title-sm text-brown lg:text-title">
        {children}
      </p>
    </figure>
  );
}
