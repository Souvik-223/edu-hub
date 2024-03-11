import { Logo } from "./Logo";
import { SidebarRoutes } from "./Sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r dark:border-slate-400 flex flex-col overflow-y-auto bg-white dark:bg-black shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
