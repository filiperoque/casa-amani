import type { GuideEntry } from "@/content/guide/types";
import Reveal from "./Reveal";

export default function GuideEntryCard({ entry }: { entry: GuideEntry }) {
  return (
    <Reveal>
      <article className="border-t border-brown/10 py-8 first:border-t-0 first:pt-0 last:border-b">
        <div className="mb-2 flex items-baseline gap-3">
          <h3 className="font-display text-xl text-brown md:text-2xl">
            {entry.title}
          </h3>
          <span className="text-sm text-brown">{entry.location}</span>
        </div>
        {entry.tagline && (
          <p className="mb-3 text-sm italic text-brown">{entry.tagline}</p>
        )}
        <p className="leading-7 text-brown">{entry.body}</p>
        {entry.body2 && (
          <p className="mt-2 leading-7 text-brown">{entry.body2}</p>
        )}
        <p className="mt-4 text-sm italic leading-6 text-brown">
          {entry.practical}
          {entry.lastVerified && (
            <> Last verified: {entry.lastVerified}.</>
          )}
        </p>
      </article>
    </Reveal>
  );
}
