import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  {
    label: "Total Revenue",
    value: "$48,271",
    change: "+12.5%",
    up: true,
    icon: DollarSign,
  },
  {
    label: "Active Users",
    value: "2,845",
    change: "+8.2%",
    up: true,
    icon: Users,
  },
  {
    label: "Transactions",
    value: "1,203",
    change: "-3.1%",
    up: false,
    icon: CreditCard,
  },
  {
    label: "Active Now",
    value: "573",
    change: "+18.7%",
    up: true,
    icon: Activity,
  },
];

const chartData = [
  { label: "Mon", value: 62 },
  { label: "Tue", value: 48 },
  { label: "Wed", value: 78 },
  { label: "Thu", value: 55 },
  { label: "Fri", value: 92 },
  { label: "Sat", value: 40 },
  { label: "Sun", value: 68 },
];

const orders = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    status: "Paid",
    amount: "$1,999.00",
  },
  { id: "#3209", customer: "Jackson Lee", status: "Pending", amount: "$39.00" },
  {
    id: "#3208",
    customer: "Isabella Nguyen",
    status: "Paid",
    amount: "$299.00",
  },
  { id: "#3207", customer: "William Kim", status: "Failed", amount: "$99.00" },
  { id: "#3206", customer: "Sofia Davis", status: "Paid", amount: "$799.00" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  Paid: "default",
  Pending: "secondary",
  Failed: "destructive",
};

const activity = [
  { who: "Jackson Lee", what: "created a new order", when: "2m" },
  { who: "Isabella Nguyen", what: "upgraded to Pro", when: "1h" },
  { who: "William Kim", what: "left a review", when: "3h" },
  { who: "Sofia Davis", what: "invited a member", when: "5h" },
];

export default function OverviewPage() {
  return (
    <>
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} size="sm">
            <CardHeader>
              <CardDescription className="flex items-center justify-between">
                {stat.label}
                <stat.icon className="text-muted-foreground size-4" />
              </CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-xs font-medium",
                  stat.up ? "text-emerald-600" : "text-destructive"
                )}
              >
                {stat.up ? (
                  <TrendingUp className="size-3.5" />
                ) : (
                  <TrendingDown className="size-3.5" />
                )}
                {stat.change}
                <span className="text-muted-foreground">vs last month</span>
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Sessions over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-52 items-end justify-between gap-3">
              {chartData.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="bg-primary/80 hover:bg-primary w-full rounded-t-md transition-all"
                      style={{ height: `${d.value}%` }}
                    />
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest team events</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {activity.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarFallback>
                    {a.who
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-sm leading-tight">
                  <span className="font-medium">{a.who}</span>{" "}
                  <span className="text-muted-foreground">{a.what}</span>
                </div>
                <span className="text-muted-foreground text-xs">{a.when}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Orders table */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div className="grid gap-1.5">
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>You made 265 sales this month</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View all
            <ArrowUpRight data-icon="inline-end" className="size-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((o) => (
                <TableRow key={o.id}>
                  <TableCell className="font-medium">{o.id}</TableCell>
                  <TableCell>{o.customer}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[o.status]}>{o.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {o.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
