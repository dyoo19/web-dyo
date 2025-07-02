import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, LifeBuoy, LogOut, User, Users } from "lucide-react";
import { useQuery } from "react-query";

import Logo from "@/../public/logo jivaloka no bg.svg";
import Mur from "@/../public/mur.svg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/data/logo";
import { microgen } from "@/lib/microgen";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const [firstName, setFirstName] = useState<string | null>("User");
  const [isHovered, setIsHovered] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = React.useState<
    { url: string; fileName: string }[] | null
  >(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFirstName = localStorage.getItem("username");
      if (storedFirstName) {
        setFirstName(storedFirstName);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="w-full p-5">
      <div className="flex justify-between gap-4 rounded-xl bg-white px-6 py-4 shadow-xl">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="logo" width={40} height={50} />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-[#A91D43]">Jambar</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
