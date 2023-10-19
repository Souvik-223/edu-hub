"use client"
import { BarChart, Compass, Layout, List } from "lucide-react"
import SidebarItems from "./Sidebar-items";
import { usePathname } from "next/navigation";

const guestRoutes= [
    {
        icon: Layout,
        label:"Dashboard",
        href:"/"
    },
    {
        icon: Compass,
        label:"Browser",
        href:"/search"

    }
]

const teacherRoutes=[
    {
        icon: List,
        label:"Courses",
        href:"/teacher/courses"
    },
    {
        icon: BarChart,
        label:"Analytics",
        href:"/teacher/analytics"

    }
]

export default function Sidebarroutes() {
    const pathname = usePathname();
    const isTeacherPage = pathname?.startsWith("/teacher");
    const routes = isTeacherPage? teacherRoutes : guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route)=>(
                <SidebarItems
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
};
