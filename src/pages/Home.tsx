import AppSidebar from "@/components/Sidebar"
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
function Home() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="container">
                    <SidebarTrigger />
                    <div className="px-4">
                        <Outlet />
                    </div>
                </main>
            </SidebarProvider>
        </>
    )
}

export default Home