import { notFound } from "next/navigation";

/**
 * Catch-all for unknown paths within a locale, so /en/anything-unknown
 * renders the branded not-found page instead of the framework default.
 */
export default function CatchAllNotFound() {
  notFound();
}
