// App screenshots for every website language, picked by the current language (falls back to English).
const files = import.meta.glob("./assets/screens/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

export type ScreenName = "today" | "trends" | "insights" | "body" | "log" | "medication";

export function screen(language: string | undefined, name: ScreenName): string {
  const code = (language ?? "en").slice(0, 2);
  return files[`./assets/screens/${code}-${name}.jpg`] ?? files[`./assets/screens/en-${name}.jpg`];
}
