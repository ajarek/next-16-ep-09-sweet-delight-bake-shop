import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Logo from "./Logo"
import { Home, LayoutDashboard, History, ArchiveRestore } from "lucide-react"

const items = [
  {
    title: "Strona główna",
    url: "/",
    icon: Home,
  },
  {
    title: "Panel",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Dodaj Produkt",
    url: "/dashboard/add-product",
    icon: ArchiveRestore,
  },

  {
    title: "Historia Transakcji",
    url: "/dashboard/transactions",
    icon: History,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarContent>
          <SidebarGroup className='flex flex-col gap-4'>
            <Logo />
            <SidebarGroupContent>
              <SidebarMenu className='flex flex-col gap-4'>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className='flex items-center gap-2 text-xl'
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
      </SidebarHeader>
      <SidebarFooter />
    </Sidebar>
  )
}
