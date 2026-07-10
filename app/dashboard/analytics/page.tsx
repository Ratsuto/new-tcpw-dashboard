import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const metrics = [
  { label: "Page Views", value: "128,430", sub: "+18% this week" },
  { label: "Bounce Rate", value: "42.3%", sub: "-2.1% this week" },
  { label: "Avg. Session", value: "3m 24s", sub: "+12s this week" },
];

const sources = [
  { name: "Direct", pct: 42 },
  { name: "Organic Search", pct: 28 },
  { name: "Referral", pct: 18 },
  { name: "Social", pct: 12 },
];

export default function AnalyticsPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <Card key={m.label} size="sm">
            <CardHeader>
              <CardDescription>{m.label}</CardDescription>
              <CardTitle className="text-2xl">{m.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-muted-foreground text-xs">{m.sub}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Where your visitors come from</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {sources.map((s) => (
            <div key={s.name} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-muted-foreground">{s.pct}%</span>
              </div>
              <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
