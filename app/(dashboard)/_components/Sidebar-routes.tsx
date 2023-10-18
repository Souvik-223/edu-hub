"use client"
import { Compass, Layout } from "lucide-react"
import SidebarItems from "./Sidebar-items";

const getRoutes= [
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

export default function Sidebarroutes() {
    const routes = getRoutes;
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
