/**
 * Editorial breadcrumb title: the page title IS the breadcrumb.
 * "the guide / land" as one baseline-aligned composition; the parent
 * is a smaller linked prefix (title-sm), the current page is the h1
 * at full title scale. Semantically: nav landmark + clean h1.
 * Editorial pages only.
 */
interface BreadcrumbTitleProps {
  parentLabel: string;
  parentHref: string;
  title: string;
}

export default function Breadcrumbs({
  parentLabel,
  parentHref,
  title,
}: BreadcrumbTitleProps) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline gap-x-4">
      <nav
        aria-label="Breadcrumb"
        className="font-display text-intro text-brown md:text-title-sm"
      >
        <a
          href={parentHref}
          className="underline decoration-brown/30 underline-offset-4 transition-colors hover:decoration-brown"
        >
          {parentLabel}
        </a>
        <span aria-hidden="true" className="select-none"> /</span>
      </nav>
      <h1 className="font-display text-title-sm text-brown md:text-title lg:text-title-lg">
        {title}
      </h1>
    </div>
  );
}
