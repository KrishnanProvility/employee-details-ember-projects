export default function substring(string, { start, end }) {
  return string.substring(start || 0, end);
}
