/**
 * Configuration for the theme customizer.
 *
 * Color presets provide light + dark values for the accent-related CSS
 * variables. "neutral" is the app default and applies no override.
 */
import { basePath } from "@/lib/base-path";

export type ThemeVars = {
    primary: string;
    "primary-foreground": string;
    ring: string;
    "sidebar-primary": string;
};

export type ColorPreset = {
    name: string;
    label: string;
    /** Swatch preview color (light primary). */
    swatch: string;
    light: ThemeVars | null;
    dark: ThemeVars | null;
};

export const colorPresets: ColorPreset[] = [
    {
        name: "neutral",
        label: "Neutral",
        swatch: "oklch(0.205 0 0)",
        light: null,
        dark: null,
    },
    {
        name: "blue",
        label: "Blue",
        swatch: "oklch(0.546 0.245 262.881)",
        light: {
            primary: "oklch(0.546 0.245 262.881)",
            "primary-foreground": "oklch(0.97 0.014 254.604)",
            ring: "oklch(0.546 0.245 262.881)",
            "sidebar-primary": "oklch(0.546 0.245 262.881)",
        },
        dark: {
            primary: "oklch(0.623 0.214 259.815)",
            "primary-foreground": "oklch(0.97 0.014 254.604)",
            ring: "oklch(0.623 0.214 259.815)",
            "sidebar-primary": "oklch(0.623 0.214 259.815)",
        },
    },
    {
        name: "violet",
        label: "Violet",
        swatch: "oklch(0.606 0.25 292.717)",
        light: {
            primary: "oklch(0.606 0.25 292.717)",
            "primary-foreground": "oklch(0.969 0.016 293.756)",
            ring: "oklch(0.606 0.25 292.717)",
            "sidebar-primary": "oklch(0.606 0.25 292.717)",
        },
        dark: {
            primary: "oklch(0.541 0.281 293.009)",
            "primary-foreground": "oklch(0.969 0.016 293.756)",
            ring: "oklch(0.541 0.281 293.009)",
            "sidebar-primary": "oklch(0.541 0.281 293.009)",
        },
    },
    {
        name: "green",
        label: "Green",
        swatch: "oklch(0.723 0.219 149.579)",
        light: {
            primary: "oklch(0.723 0.219 149.579)",
            "primary-foreground": "oklch(0.982 0.018 155.826)",
            ring: "oklch(0.723 0.219 149.579)",
            "sidebar-primary": "oklch(0.723 0.219 149.579)",
        },
        dark: {
            primary: "oklch(0.696 0.17 162.48)",
            "primary-foreground": "oklch(0.393 0.095 152.535)",
            ring: "oklch(0.696 0.17 162.48)",
            "sidebar-primary": "oklch(0.696 0.17 162.48)",
        },
    },
    {
        name: "amber",
        label: "Amber",
        swatch: "oklch(0.769 0.188 70.08)",
        light: {
            primary: "oklch(0.769 0.188 70.08)",
            "primary-foreground": "oklch(0.279 0.077 45.635)",
            ring: "oklch(0.769 0.188 70.08)",
            "sidebar-primary": "oklch(0.769 0.188 70.08)",
        },
        dark: {
            primary: "oklch(0.769 0.188 70.08)",
            "primary-foreground": "oklch(0.279 0.077 45.635)",
            ring: "oklch(0.769 0.188 70.08)",
            "sidebar-primary": "oklch(0.769 0.188 70.08)",
        },
    },
    {
        name: "rose",
        label: "Rose",
        swatch: "oklch(0.645 0.246 16.439)",
        light: {
            primary: "oklch(0.645 0.246 16.439)",
            "primary-foreground": "oklch(0.969 0.015 12.422)",
            ring: "oklch(0.645 0.246 16.439)",
            "sidebar-primary": "oklch(0.645 0.246 16.439)",
        },
        dark: {
            primary: "oklch(0.645 0.246 16.439)",
            "primary-foreground": "oklch(0.969 0.015 12.422)",
            ring: "oklch(0.645 0.246 16.439)",
            "sidebar-primary": "oklch(0.645 0.246 16.439)",
        },
    },
];

export type FontPreset = { name: string; label: string; value: string | null };

// `value` is assigned to the `--font-sans` custom property. `null` resets to
// the default (Inter, bound via next/font in the root layout).
export const fontPresets: FontPreset[] = [
    { name: "inter", label: "Inter", value: null },
    { name: "geist", label: "Geist", value: "var(--font-geist-sans)" },
    { name: "serif", label: "Serif", value: "var(--font-serif)" },
    { name: "mono", label: "Mono", value: "var(--font-geist-mono)" },
    {
        name: "system",
        label: "System",
        value: "ui-sans-serif, system-ui, sans-serif",
    },
];

export type BackgroundPreset = {
    name: string;
    label: string;
    /** CSS background-image value, or null for none. */
    image: string | null;
    size?: string;
    /** Small preview swatch background. */
    preview: string;
};

export const backgroundPresets: BackgroundPreset[] = [
    {
        name: "none",
        label: "None",
        image: null,
        preview: "var(--background)",
    },
    {
        name: "dots",
        label: "Dots",
        image: "radial-gradient(color-mix(in oklch, var(--foreground), transparent 88%) 1px, transparent 1px)",
        size: "16px 16px",
        preview: "radial-gradient(color-mix(in oklch, var(--foreground), transparent 80%) 1.5px, var(--background) 1.5px) 0 0 / 8px 8px",
    },
    {
        name: "grid",
        label: "Grid",
        image: "linear-gradient(color-mix(in oklch, var(--foreground), transparent 92%) 1px, transparent 1px), linear-gradient(to right, color-mix(in oklch, var(--foreground), transparent 92%) 1px, transparent 1px)",
        size: "22px 22px",
        preview:
            "linear-gradient(var(--border) 1px, var(--background) 1px), linear-gradient(to right, var(--border) 1px, var(--background) 1px) 0 0 / 8px 8px",
    },
    {
        name: "mesh",
        label: "Mesh",
        image: "radial-gradient(at 15% 20%, color-mix(in oklch, var(--primary), transparent 82%) 0px, transparent 50%), radial-gradient(at 85% 15%, color-mix(in oklch, var(--primary), transparent 88%) 0px, transparent 55%), radial-gradient(at 75% 85%, color-mix(in oklch, var(--primary), transparent 85%) 0px, transparent 50%)",
        size: "cover",
        preview: "radial-gradient(at 20% 20%, color-mix(in oklch, var(--primary), transparent 60%), var(--background))",
    },
    {
        name: "glow",
        label: "Glow",
        image: "radial-gradient(120% 80% at 50% -10%, color-mix(in oklch, var(--primary), transparent 80%) 0px, transparent 60%)",
        size: "cover",
        preview: "radial-gradient(100% 80% at 50% 0%, color-mix(in oklch, var(--primary), transparent 55%), var(--background))",
    },
    {
        name: "photo",
        label: "Photo",
        image: `url(${basePath}background/bg_light.webp)`,
        size: "cover",
        preview: `url(${basePath}background/bg_light.webp) center / cover`,
    },
    // macOS-wallpaper-inspired gradients (fixed colors, ignore theme accent).
    {
        name: "bigsur",
        label: "Big Sur",
        image: "radial-gradient(90% 70% at 80% 85%, rgba(255, 148, 92, 0.6) 0%, transparent 55%), radial-gradient(70% 60% at 12% 92%, rgba(255, 96, 160, 0.4) 0%, transparent 55%), linear-gradient(160deg, #071a5e 0%, #1e46c9 45%, #4f8ef7 75%, #9fd4ff 100%)",
        size: "cover",
        preview: "linear-gradient(160deg, #0b1c8c, #4f8ef7 60%, #ff9a5a)",
    },
    {
        name: "monterey",
        label: "Monterey",
        image: "radial-gradient(80% 80% at 15% 18%, rgba(255, 100, 170, 0.75) 0%, transparent 60%), radial-gradient(90% 80% at 85% 30%, rgba(96, 90, 224, 0.7) 0%, transparent 60%), radial-gradient(110% 80% at 50% 105%, rgba(38, 20, 92, 0.9) 0%, transparent 70%), linear-gradient(150deg, #ff7ab8 0%, #9a4fd6 45%, #3c2f9e 100%)",
        size: "cover",
        preview: "linear-gradient(150deg, #ff7ab8, #9a4fd6, #3c2f9e)",
    },
    {
        name: "ventura",
        label: "Ventura",
        image: "radial-gradient(80% 70% at 18% 12%, rgba(255, 150, 70, 0.8) 0%, transparent 60%), radial-gradient(90% 80% at 82% 78%, rgba(210, 48, 120, 0.55) 0%, transparent 60%), linear-gradient(160deg, #ff8a3d 0%, #e0447c 45%, #4b1e78 85%, #1b1040 100%)",
        size: "cover",
        preview: "linear-gradient(160deg, #ff8a3d, #e0447c, #2a1454)",
    },
    {
        name: "sonoma",
        label: "Sonoma",
        image: "radial-gradient(90% 70% at 75% 15%, rgba(255, 255, 255, 0.55) 0%, transparent 60%), radial-gradient(80% 60% at 20% 85%, rgba(28, 78, 130, 0.5) 0%, transparent 60%), linear-gradient(165deg, #cfeaf9 0%, #8fc7ec 40%, #4d94cf 75%, #2b6aa8 100%)",
        size: "cover",
        preview: "linear-gradient(165deg, #cfeaf9, #8fc7ec, #2b6aa8)",
    },
    {
        name: "sequoia",
        label: "Sequoia",
        image: "radial-gradient(80% 60% at 28% 22%, rgba(255, 196, 218, 0.9) 0%, transparent 60%), radial-gradient(85% 70% at 82% 72%, rgba(142, 168, 255, 0.75) 0%, transparent 65%), linear-gradient(150deg, #ffd9e6 0%, #d4c6ff 45%, #93aaff 100%)",
        size: "cover",
        preview: "linear-gradient(150deg, #ffd9e6, #d4c6ff, #93aaff)",
    },
];

export type ThemeConfig = {
    color: string;
    radius: string;
    font: string;
    background: string;
};

export const defaultThemeConfig: ThemeConfig = {
    color: "neutral",
    radius: "0.625rem",
    font: "inter",
    background: "none",
};

export const STORAGE_KEY = "tcpw-theme-config";
