import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Facebook from "@/assets/svg/facebook";
const items = [
  {
    title: "Mening to'lovlarim",
    url: "#",
    icon: Facebook,
  },
  {
    title: "To'lovar tarixi",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Online Buyurtmalar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Chiqish",
    url: "#",
    icon: Search,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="h-full relative mt-2 text-xl">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-lg"> {item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
