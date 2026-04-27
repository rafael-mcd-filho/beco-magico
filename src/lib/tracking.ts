type TrackingPayload = Record<string, string | number | boolean | null | undefined>

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>
  gtag?: (...args: unknown[]) => void
}

export function trackEvent(eventName: string, payload: TrackingPayload = {}) {
  if (typeof window === "undefined") return

  const trackingWindow = window as DataLayerWindow

  if (typeof trackingWindow.gtag === "function") {
    trackingWindow.gtag("event", eventName, payload)
    return
  }

  trackingWindow.dataLayer?.push({
    event: eventName,
    ...payload,
  })
}
