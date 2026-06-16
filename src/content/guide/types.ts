export interface GuideEntry {
  title: string;
  slug: string;
  tagline?: string;
  location: string;
  body: string;
  body2?: string;
  practical: string;
  lastVerified: string;
  distanceKm?: number;
  travelMinutes?: number;
  contact?: {
    phone?: string;
    email?: string;
    whatsapp?: string;
    instagram?: string;
    website?: string;
  };
  tags?: string[];
}

export interface GuideCategory {
  key: string;
  title: string;
  slug: string;
  description: string;
  entries: GuideEntry[];
}
