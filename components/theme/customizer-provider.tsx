"use client";

import * as React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import {
  backgroundPresets,
  colorPresets,
  defaultThemeConfig,
  fontPresets,
  STORAGE_KEY,
  type ThemeConfig,
} from "@/lib/theme-presets";

type CustomizerContextValue = {
  config: ThemeConfig;
  setConfig: (patch: Partial<ThemeConfig>) => void;
  reset: () => void;
};

const CustomizerContext = React.createContext<CustomizerContextValue | null>(
  null
);

export function useCustomizer() {
  const ctx = React.useContext(CustomizerContext);
  if (!ctx) {
    throw new Error("useCustomizer must be used within CustomizerProvider.");
  }
  return ctx;
}

const STYLE_ELEMENT_ID = "tcpw-theme-vars";

function serializeVars(vars: Record<string, string>) {
  return Object.entries(vars)
    .map(([key, value]) => `--${key}:${value};`)
    .join("");
}

/** Build the `:root` / `.dark` stylesheet for the active color + radius. */
function buildColorCss(config: ThemeConfig) {
  const preset =
    colorPresets.find((p) => p.name === config.color) ?? colorPresets[0];

  const rootVars: Record<string, string> = {radius: config.radius};
  const light = preset.light ? {...preset.light} : {};
  const dark = preset.dark ? {...preset.dark} : {};

  return [
    `:root{${serializeVars({...rootVars, ...light})}}`,
    dark && Object.keys(dark).length ? `.dark{${serializeVars(dark)}}` : "",
  ].join("");
}

function applyConfig(config: ThemeConfig) {
  if (typeof document === "undefined") return;

  // 1. Color + radius via an injected stylesheet (respects `.dark`).
  let style = document.getElementById(
    STYLE_ELEMENT_ID
  ) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ELEMENT_ID;
    document.head.appendChild(style);
  }
  style.textContent = buildColorCss(config);

  const root = document.documentElement;

  // 2. Font — inline on <html> so it beats the next/font class rule.
  const font = fontPresets.find((f) => f.name === config.font);
  if (font?.value) {
    root.style.setProperty("--font-sans", font.value);
  } else {
    root.style.removeProperty("--font-sans");
  }

  // 3. Background image on <body>.
  const bg = backgroundPresets.find((b) => b.name === config.background);
  const body = document.body;
  if (bg?.image) {
    body.style.backgroundImage = bg.image;
    body.style.backgroundSize = bg.size ?? "auto";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundPosition = "center";
  } else {
    body.style.backgroundImage = "";
    body.style.backgroundSize = "";
    body.style.backgroundAttachment = "";
    body.style.backgroundPosition = "";
  }
}

function CustomizerProvider({children}: { children: React.ReactNode }) {
  const [config, setConfigState] =
    React.useState<ThemeConfig>(defaultThemeConfig);

  // Load persisted config on mount.
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = {...defaultThemeConfig, ...JSON.parse(raw)};
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate persisted config on mount
        setConfigState(parsed);
        applyConfig(parsed);
        return;
      }
    } catch {
      // ignore malformed storage
    }
    applyConfig(defaultThemeConfig);
  }, []);

  const setConfig = React.useCallback((patch: Partial<ThemeConfig>) => {
    setConfigState((prev) => {
      const next = {...prev, ...patch};
      applyConfig(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const reset = React.useCallback(() => {
    setConfigState(defaultThemeConfig);
    applyConfig(defaultThemeConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value = React.useMemo(
    () => ({config, setConfig, reset}),
    [config, setConfig, reset]
  );

  return (
    <CustomizerContext.Provider value={value}>
      {children}
    </CustomizerContext.Provider>
  );
}

export function ThemeProvider({children}: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CustomizerProvider>{children}</CustomizerProvider>
    </NextThemesProvider>
  );
}
