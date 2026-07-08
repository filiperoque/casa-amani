/**
 * Editorial breadcrumb: set in the display face, lowercase, as part of
 * the heading composition ("the guide / land"). Semantically a nav
 * landmark; visually a typographic device. Editorial pages only.
 */
interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-baseline gap-x-3 font-display text-intro text-brown">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-baseline gap-x-3">
            {i > 0 && (
              <span aria-hidden="true" className="select-none">
                /
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="underline decoration-brown/30 underline-offset-4 transition-colors hover:decoration-brown"
              >
                {item.label}
              </a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
