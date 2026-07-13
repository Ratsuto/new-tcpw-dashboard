"use client";

import {useRouter, usePathname} from "next/navigation";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  ChevronsUpDown,
  LayoutDashboard,
  LogOut,
  Package,
  Search,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  {title: "Overview", icon: LayoutDashboard, href: "/dashboard"},
  {title: "Analytics", icon: BarChart3, href: "/dashboard/analytics"},
  {title: "Customers", icon: Users, href: "/dashboard/customers"},
  {title: "Orders", icon: Package, href: "/dashboard/orders"},
  {title: "Settings", icon: Settings, href: "/dashboard/settings"},
];

export default function DashboardLayout({
                                          children,
                                        }: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href);

  const title =
    navItems.find((item) => isActive(item.href))?.title ?? "Dashboard";

  function handleLogout() {
    router.push("/login");
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className={"bg-sidebar/70 backdrop-blur-xl ring-gray-200 dark:ring-zinc-700"}>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-xl">
              <Sparkles className="size-4"/>
            </div>
            <div className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold">TCPW</span>
              <span className="text-muted-foreground text-xs">Dashboard</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive(item.href)}
                      tooltip={item.title}
                      render={<Link href={item.href}/>}
                    >
                      <item.icon/>
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent"
                    />
                  }
                >
                  <Avatar size="sm">
                    <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate text-sm font-medium">
                      Sofia Ratsu
                    </span>
                    <span className="text-muted-foreground truncate text-xs">
                      sofia@tcpw.io
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="start" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator/>
                  <DropdownMenuItem>
                    <Settings className="size-4"/>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={handleLogout}
                  >
                    <LogOut className="size-4"/>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className={"bg-sidebar/0"}>
        <header className="bg-sidebar/70 supports-[backdrop-filter]:bg-sidebar/70 sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b px-4 py-4 backdrop-blur-xl">
          <SidebarTrigger/>
          <Separator orientation="vertical" className="mr-2 h-full"/>
          <h1 className="text-base font-semibold">{title}</h1>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"/>
              <Input
                placeholder="Search…"
                className="w-48 pl-9 md:w-64"
                type="search"
              />
            </div>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="size-4"/>
            </Button>
            <Avatar size="sm">
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
