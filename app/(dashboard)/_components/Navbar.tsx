import NvabarRoutes from "@/components/Navbar-routes";
import MobileSidebar from "./Mobile-sidebar";

export default function NavBar() {
    return(
        <div className="p-4 border-b h-full flex items-centershadow-sm bg-slate-100 dark:bg-slate-600">
            <MobileSidebar/>
            <NvabarRoutes/>
        </div>
    )

}
