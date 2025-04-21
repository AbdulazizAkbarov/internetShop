import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import userIcon from "../../assets/svg/userIcon.svg"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
const items = [
  {
    title: "Mening to'lovlarim",
    url: "#",
    icon: Home,
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

]

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
<item.icon/>
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
  )
}
