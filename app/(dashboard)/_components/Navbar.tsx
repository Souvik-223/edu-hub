import { NavbarRoutes } from "@/components/Navbar-routes";

import { MobileSidebar } from "./Mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b dark:border-slate-400 h-full flex items-center bg-white dark:bg-black shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
