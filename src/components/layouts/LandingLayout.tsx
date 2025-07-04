import * as React from "react";
import { Barcode, Building2, LayoutDashboard } from "lucide-react";

import { Menu } from "@/types";

import { Icons } from "../ui/icons";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import SidebarItemWithSubMenu from "./SidebarItemWithSubMenu";

interface Props extends React.PropsWithChildren {}
const menus = [
  {
    id: "home",
    label: "Home",
    path: "/",
    Icon: <LayoutDashboard />,

    roles: "*",
  },
  {
    id: "assets",
    label: "Assets",
    path: "/assets",
    Icon: <Building2 />,

    roles: "*",
  },
];

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-w-screen relative flex min-h-screen flex-col">
      <Navbar />

      <div className="pt- flex sm:ml-5">
        <div className="hidden sm:block">
          <Sidebar>
            {menus.map((menu) => {
              // if (menu.roles !== "*" && Array.isArray(menu.roles)) {
              //   return null;
              // }

              // if (menu.subMenus?.length) {
              //   return (
              //     <SidebarItemWithSubMenu
              //       key={menu.id}
              //       id={menu.id}
              //       label={menu.label}
              //       path={menu.path}
              //       subMenus={menu.subMenus}
              //     />
              //   );
              // }
              return (
                <SidebarItem
                  icon={menu.Icon}
                  key={menu.id}
                  label={menu.label}
                  path={menu.path}
                />
              );
            })}
          </Sidebar>
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-hidden p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
