"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Check, Monitor, Moon, Paintbrush, RotateCcw, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { backgroundPresets, colorPresets, fontPresets } from "@/lib/theme-presets";
import { useCustomizer } from "@/components/theme/customizer-provider";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <Label className="text-muted-foreground text-xs font-medium">{label}</Label>
            {children}
        </div>
    );
}

const modes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
];

export function ThemeCustomizer() {
    const { config, setConfig, reset } = useCustomizer();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount guard to avoid theme hydration mismatch
    React.useEffect(() => setMounted(true), []);

    const radius = parseFloat(config.radius) || 0;

    return (
        <Drawer swipeDirection="right">
            <DrawerTrigger
                render={<Button size="icon-lg" className="fixed right-5 bottom-5 z-40 rounded-full shadow-lg" aria-label="Customize theme" />}
            >
                <Paintbrush className="size-5" />
            </DrawerTrigger>

            <DrawerContent className={"bg-popover/70 border-gray-100/10 backdrop-blur-xl dark:border-zinc-700/10"}>
                <DrawerHeader className="border-b pb-4">
                    <DrawerTitle>Customize</DrawerTitle>
                    <DrawerDescription>Personalize colors, fonts, radius, and background.</DrawerDescription>
                </DrawerHeader>

                <div className="no-scrollbar flex flex-col gap-6 overflow-y-auto p-4">
                    {/* Mode */}
                    <Section label="Mode">
                        <div className="grid grid-cols-3 gap-2">
                            {modes.map((m) => {
                                const active = mounted && theme === m.value;
                                return (
                                    <Button key={m.value} variant={active ? "default" : "outline"} size="sm" onClick={() => setTheme(m.value)}>
                                        <m.icon className="size-4" />
                                        {m.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </Section>

                    {/* Color */}
                    <Section label="Color">
                        <div className="grid grid-cols-3 gap-2">
                            {colorPresets.map((preset) => {
                                const active = config.color === preset.name;
                                return (
                                    <Button
                                        key={preset.name}
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setConfig({ color: preset.name })}
                                        className={cn("justify-start", active && "border-primary")}
                                    >
                                        <span
                                            className="size-4 shrink-0 rounded-full border border-black/10 dark:border-white/15"
                                            style={{ background: preset.swatch }}
                                        />
                                        <span className="truncate">{preset.label}</span>
                                        {active && <Check className="ml-auto size-3.5" />}
                                    </Button>
                                );
                            })}
                        </div>
                    </Section>

                    {/* Radius */}
                    <Section label={`Radius · ${radius}rem`}>
                        <div className="px-1 py-2">
                            <Slider
                                value={[radius]}
                                min={0}
                                max={1.5}
                                step={0.025}
                                onValueChange={(value) =>
                                    setConfig({
                                        radius: `${Array.isArray(value) ? value[0] : value}rem`,
                                    })
                                }
                            />
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {["0", "0.25", "0.5", "0.75", "1"].map((r) => (
                                <Button
                                    key={r}
                                    variant={radius === parseFloat(r) ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setConfig({ radius: `${r}rem` })}
                                >
                                    {r}
                                </Button>
                            ))}
                        </div>
                    </Section>

                    {/* Font */}
                    <Section label="Font">
                        <div className="grid grid-cols-2 gap-2">
                            {fontPresets.map((font) => {
                                const active = config.font === font.name;
                                return (
                                    <Button
                                        key={font.name}
                                        variant={active ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setConfig({ font: font.name })}
                                        style={{
                                            fontFamily: font.value ?? "var(--font-sans)",
                                        }}
                                    >
                                        {font.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </Section>

                    {/* Background */}
                    <Section label="Background">
                        <div className="grid grid-cols-5 gap-2">
                            {backgroundPresets.map((bg) => {
                                const active = config.background === bg.name;
                                return (
                                    <button
                                        key={bg.name}
                                        type="button"
                                        onClick={() => setConfig({ background: bg.name })}
                                        aria-label={bg.label}
                                        title={bg.label}
                                        className={cn(
                                            "relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border transition-all",
                                            active ? "border-primary ring-ring/30 ring-2" : "border-border hover:border-foreground/30"
                                        )}
                                        style={{ background: bg.preview }}
                                    >
                                        {active && <Check className="text-foreground size-4 drop-shadow" />}
                                    </button>
                                );
                            })}
                        </div>
                    </Section>
                </div>

                <DrawerFooter className="flex-row border-t pt-4">
                    <Button variant="outline" className="flex-1" onClick={reset}>
                        <RotateCcw className="size-4" />
                        Reset
                    </Button>
                    <DrawerClose render={<Button className="flex-1" />}>Done</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
