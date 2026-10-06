import { site } from "@/content/site";

export type StayRequest = {
  arrival: string;
  departure: string;
  guests: string;
  name: string;
  email: string;
  whatsapp?: string | undefined;
  message?: string | undefined;
  locale: string;
};

export type StayResult = { ok: true } | { ok: false; reason: "not-connected" | "error" };

/**
 * Integration point for the stay request form.
 * No backend is configured yet: this returns "not-connected" and the UI
 * points the visitor to WhatsApp. Replace the body with a real call
 * (e.g. a server function sending an email) and set site.stayFormConnected.
 */
export async function submitStayRequest(_req: StayRequest): Promise<StayResult> {
  if (!site.stayFormConnected) return { ok: false, reason: "not-connected" };
  return { ok: false, reason: "error" };
}
