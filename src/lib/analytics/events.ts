export type AnalyticsEventName =
  | "cta_click"
  | "lead_submit_b2b"
  | "lead_submit_contact"
  | "scroll_depth"
  | "product_card_click";

export function trackEvent(name: AnalyticsEventName, payload: Record<string, string | number>) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...payload });
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string | number>>;
  }
}
