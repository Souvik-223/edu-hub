import Logo from "./Logo"
import Sidebarroutes from "./Sidebar-routes"

export default function Sidebar() {
    return(
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <Sidebarroutes/>
            </div>
        </div>
    )
};
