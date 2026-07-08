/**
 * Editorial kicker: a small numbered label above a section heading
 * ("01", "02", ...). Language-free by design. Used only on editorial
 * pages (guide, calheta, remote-work), never on the landing or house
 * pages, per DESIGN.md.
 */
export default function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p
      aria-hidden="true"
      className="mb-3 font-display text-sm uppercase tracking-cta text-brown"
    >
      {children}
    </p>
  );
}
