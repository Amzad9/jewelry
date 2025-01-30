import { SidebarTrigger } from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "./ui/button"
import { logoutUser } from "@/store/auth/authThunks"
import { useAppDispatch } from "@/store/store"

function TopNavigation() {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(logoutUser())
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