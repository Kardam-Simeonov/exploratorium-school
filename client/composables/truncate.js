export function truncate (text, length, suffix) {
  if (text.length > length) {
    const trimmedString = text.substring(0, length)
    return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + suffix
  } else {
    return text
  }
}
