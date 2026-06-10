const AIRBNB_URL = "https://www.airbnb.co.uk/rooms/1695506665949683620";

interface BookCTAProps {
  placement: string;
  label?: string;
  className?: string;
}

export default function BookCTA({
  placement,
  label = "Book a stay",
  className = "inline-block border border-brown bg-brown/[0.06] px-6 py-3 font-display text-sm uppercase tracking-[4px] text-brown transition-colors hover:bg-brown/15",
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
