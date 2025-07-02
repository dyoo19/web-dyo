import * as React from "react";

import { Menu } from "@/types";

import { Icons } from "../ui/icons";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import SidebarItemWithSubMenu from "./SidebarItemWithSubMenu";

interface Props extends React.PropsWithChildren {}
const menus: Menu[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
    Icon: (props) => <Icons.home {...props} />,

    roles: "*",
  },
  {
    id: "assets",
    label: "Assets",
    path: "/assets",
    Icon: (props) => <Icons.home {...props} />,

    roles: "*",
  },
];

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-w-screen relative flex min-h-screen flex-col">
        <Navbar  />

      <div className="ml-5 flex pt-">
        <Sidebar>
          {menus.map((menu) => {
            if (menu.roles !== "*" && Array.isArray(menu.roles)) {
              return null;
            }

            if (menu.subMenus?.length) {
              return (
                <SidebarItemWithSubMenu
                  key={menu.id}
                  id={menu.id}
                  label={menu.label}
                  path={menu.path}
                  subMenus={menu.subMenus}
                />
              );
            }

            return (
              <SidebarItem key={menu.id} label={menu.label} path={menu.path} />
            );
          })}
        </Sidebar>
        {/* Content */}
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-hidden p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
