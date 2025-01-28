import AppSidebar from "@/components/Sidebar"
import TopNavigation from "@/components/TopNavigation"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

function Home() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="container">
                <TopNavigation />

                    {/* <SidebarTrigger /> */}
                    <div className="px-4">
                        <Outlet />
                    </div>
                </main>
            </SidebarProvider>
        </>
    )
}

export default Home