import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"

import { Calendar, Inbox, Search, Settings } from "lucide-react"
import { NavLink } from "react-router-dom"

function AppSidebar() {
    const items = [
        {
            title: "Dashboard",
            url: "",
            icon: Inbox,
        },
        {
            title: "Category",
            url: "category",
            icon: Inbox,
        },
        {
            title: "SubCategory",
            url: "subcategory",
            icon: Calendar,
        },
        {
            title: "Product",
            url: "products",
            icon: Search,
        },
        {
            title: "Order",
            url: "order",
            icon: Search,
        },
        {
            title: "Settings",
            url: "setting",
            icon: Settings,
        },
    ]

    return (
            <Sidebar>
                <SidebarContent className="px-2">
                    <SidebarGroup />
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem  key={item.title}>
                                    <SidebarMenuButton className="h-12" asChild>
                                        <NavLink to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroup />
                </SidebarContent>
            </Sidebar>
    )
}

export default AppSidebar