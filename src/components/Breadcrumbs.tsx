/**
 * Editorial breadcrumb title: the page title IS the breadcrumb.
 * "the guide /" as a small linked prefix (fixed at intro size so the
 * title leads by a full ~2.4:1 step), baseline-aligned with the h1.
 * No underline: underlines belong to prose text links only; the link
 * affordance here is the breadcrumb pattern itself plus a hover dim.
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
    <div className="mb-6 flex flex-wrap items-baseline gap-x-3">
      <nav
        aria-label="Breadcrumb"
        className="font-display text-intro text-brown"
      >
        <a
          href={parentHref}
          className="transition-opacity hover:opacity-80"
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
