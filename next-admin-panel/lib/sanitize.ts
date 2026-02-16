const htmlMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
};

export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => htmlMap[char]);
}

export function sanitizeTextArray(values: string[]) {
  return values.map((value) => escapeHtml(value.trim()));
}
