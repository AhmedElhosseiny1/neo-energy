export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: string;
  pathname: string;
  userAgent?: string;
}

const STORAGE_KEY = "neo-energy-analytics";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function getStoredEvents(): AnalyticsEvent[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function trackEvent(
  name: string,
  properties: Record<string, unknown> = {}
): AnalyticsEvent {
  const event: AnalyticsEvent = {
    name,
    properties,
    timestamp: new Date().toISOString(),
    pathname: typeof window !== "undefined" ? window.location.pathname : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
  };

  if (typeof window !== "undefined") {
    // Push to GTM-style data layer if available
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: name,
      neoEnergy: properties,
    });

    // Persist locally so it can be reviewed/exported later
    const events = getStoredEvents();
    events.push(event);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch {
      // Ignore storage quota errors
    }
  }

  return event;
}

export function clearStoredEvents(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}
