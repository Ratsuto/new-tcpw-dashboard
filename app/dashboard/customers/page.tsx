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

const customers = [
  {
    name: "Olivia Martin",
    email: "olivia@example.com",
    plan: "Pro",
    spend: "$1,999",
  },
  {
    name: "Jackson Lee",
    email: "jackson@example.com",
    plan: "Free",
    spend: "$39",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella@example.com",
    plan: "Pro",
    spend: "$299",
  },
  {
    name: "William Kim",
    email: "william@example.com",
    plan: "Team",
    spend: "$99",
  },
  {
    name: "Sofia Davis",
    email: "sofia@example.com",
    plan: "Pro",
    spend: "$799",
  },
];

const planVariant: Record<string, "default" | "secondary" | "outline"> = {
  Pro: "default",
  Team: "secondary",
  Free: "outline",
};

export default function CustomersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>{customers.length} active accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead className="text-right">Lifetime spend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((c) => (
              <TableRow key={c.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar size="sm">
                      <AvatarFallback>
                        {c.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="leading-tight">
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="text-muted-foreground text-xs">
                        {c.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={planVariant[c.plan]}>{c.plan}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {c.spend}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
