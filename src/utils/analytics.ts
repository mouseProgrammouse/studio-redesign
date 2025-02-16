export enum EventTypes {
  MENU_CLICKED = "menu_item_clicked",
  CTA_CLICKED = "cta_clicked",
  VIBER_CLICKED = "viber_clicked",
  WHATSUP_CLICKED = "whatsup_clicked",
  LNG_CLICKED = "swithc_language_clicked",
  PHONE_CLICKED = "phone_clicked",
}

export const sendEvent = (
  eventType: EventTypes,
  extra?: Record<string, unknown>,
) => {
  if (typeof window !== "undefined" && typeof gtag === "function") {
    gtag("event", eventType, extra);
  }
};
