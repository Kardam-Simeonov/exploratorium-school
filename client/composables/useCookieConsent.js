const showBanner = ref(false)

export function useCookieConsent() {
  function openBanner() {
    showBanner.value = true
  }

  return { showBanner, openBanner }
}
