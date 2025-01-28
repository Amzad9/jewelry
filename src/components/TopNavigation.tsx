import { SidebarTrigger } from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "./ui/button"

function TopNavigation() {
   const navigate = useNavigate()
    const onLogout = () => {
        sessionStorage.removeItem("token")
        navigate('/login')
    }
    return (
        <Menubar className="py-2 h-auto justify-between">
            <MenubarMenu>
                <SidebarTrigger />
                <MenubarTrigger>
                    <Button onClick={onLogout}>Logout</Button>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}

export default TopNavigation