const AIRBNB_URL = "https://www.airbnb.co.uk/rooms/1695506665949683620";

interface BookCTAProps {
  placement: string;
  label?: string;
  className?: string;
}

export default function BookCTA({
  placement,
  label = "Book a stay",
  className = "inline-block bg-warm-deep px-6 py-3 font-display text-sm uppercase tracking-cta text-cream transition-[background-color,transform] hover:scale-[1.02] hover:bg-warm-deep/90 active:scale-[0.96]",
}: BookCTAProps) {
  return (
    <a
      href={`${AIRBNB_URL}?utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=${placement}`}
      className={`plausible-event-name=outbound-airbnb ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
