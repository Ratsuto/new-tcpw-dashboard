import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { orderColumns, type Order } from "./columns";

const orders: Order[] = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    date: "Jul 8, 2026",
    status: "Paid",
    amount: 1999,
  },
  {
    id: "#3209",
    customer: "Jackson Lee",
    date: "Jul 8, 2026",
    status: "Pending",
    amount: 39,
  },
  {
    id: "#3208",
    customer: "Isabella Nguyen",
    date: "Jul 7, 2026",
    status: "Paid",
    amount: 299,
  },
  {
    id: "#3207",
    customer: "William Kim",
    date: "Jul 6, 2026",
    status: "Failed",
    amount: 99,
  },
  {
    id: "#3206",
    customer: "Sofia Davis",
    date: "Jul 5, 2026",
    status: "Paid",
    amount: 799,
  },
  {
    id: "#3205",
    customer: "Ethan Brown",
    date: "Jul 4, 2026",
    status: "Refunded",
    amount: 149,
  },
  {
    id: "#3204",
    customer: "Ava Wilson",
    date: "Jul 3, 2026",
    status: "Paid",
    amount: 459,
  },
  {
    id: "#3203",
    customer: "Liam Johnson",
    date: "Jul 2, 2026",
    status: "Pending",
    amount: 89,
  },
  {
    id: "#3202",
    customer: "Emma Garcia",
    date: "Jul 1, 2026",
    status: "Paid",
    amount: 1299,
  },
  {
    id: "#3201",
    customer: "Noah Martinez",
    date: "Jun 30, 2026",
    status: "Failed",
    amount: 199,
  },
  {
    id: "#3200",
    customer: "Mia Rodriguez",
    date: "Jun 29, 2026",
    status: "Paid",
    amount: 649,
  },
  {
    id: "#3199",
    customer: "Lucas Hernandez",
    date: "Jun 28, 2026",
    status: "Refunded",
    amount: 79,
  },
];

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
        <CardDescription>{orders.length} orders this period</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={orderColumns}
          data={orders}
          searchKey="customer"
          searchPlaceholder="Search customers…"
          pageSize={8}
        />
      </CardContent>
    </Card>
  );
}
