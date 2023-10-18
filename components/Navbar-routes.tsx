"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname,useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Ghost, LogOut } from "lucide-react"
import Link from "next/link"

export default function NvabarRoutes() {
    const pathname = usePathname()
    const router = useRouter()

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");


    return(
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage? (
                <Button>
                    <LogOut className="h-4 w-4 mr-2"/>
                    Exit
                </Button>
            ):(
                <Link href={"/teacher/courses"}>
                    <Button size="sm" variant="ghost" className="font-semibold bg-blue-400 hover:bg-blue-200">
                        Teacher Mode
                    </Button>
                </Link>
            )}
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
};
