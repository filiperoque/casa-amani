const OTA_URLS = {
  airbnb: "https://www.airbnb.co.uk/rooms/1695506665949683620",
  booking:
    "https://www.booking.com/hotel/pt/superb-modern-villa-with-pool-in-calhetaamani.en-gb.html",
  vrbo: "https://www.vrbo.com/en-gb/p12152433",
  ourmadeira: "https://www.ourmadeira.com/regions/calheta-area/amani/",
  casai: "https://www.casai.com/property/ourmadeira-amani/BC-16564906",
} as const;

type OtaKey = keyof typeof OTA_URLS;

interface BookCTAProps {
  ota?: OtaKey;
  placement: string;
  label?: string;
  className?: string;
}

function buildHref(ota: OtaKey, placement: string) {
  const base = OTA_URLS[ota];
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=casa-amani.com&utm_medium=referral&utm_campaign=book&utm_content=${placement}`;
}

export default function BookCTA({
  ota = "airbnb",
  placement,
  label,
  className = "inline-block border border-brown bg-brown/[0.06] px-6 py-3 font-display text-sm uppercase tracking-[4px] text-brown transition-colors hover:bg-brown/15",
}: BookCTAProps) {
  return (
    <a
      href={buildHref(ota, placement)}
      className={`plausible-event-name=outbound-${ota} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label || "Book a stay"}
    </a>
  );
}
