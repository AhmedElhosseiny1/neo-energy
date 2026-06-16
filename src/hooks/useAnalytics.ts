"use client";

import { useCallback } from "react";
import { trackEvent, getStoredEvents, AnalyticsEvent } from "@/lib/analytics";

export function useAnalytics() {
  const track = useCallback(
    (name: string, properties?: Record<string, unknown>) =>
      trackEvent(name, properties),
    []
  );

  const getEvents = useCallback((): AnalyticsEvent[] => getStoredEvents(), []);

  return { track, getEvents };
}
