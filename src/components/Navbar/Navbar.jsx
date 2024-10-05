import { useState } from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarDemo />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>BS</AvatarFallback>
    </Avatar>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-slate-200 md:flex md:items-center md:justify-between md:px-8 md:py-3 lg:px-12 lg:py-6">
      <div className="flex items-center md:gap-10 lg:gap-16">
        <div className="flex items-center gap-1">
          <LibraryMusicIcon sx={{ fontSize: 40 }} />
          <span className="text-2xl font-black">Planice</span>
        </div>
        <p className="text-lg font-semibold text-slate-400">My Documents</p>
      </div>
      <div className="flex items-center gap-6">
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 32 }} />
        <Dropdown />
      </div>
    </nav>
  );
}
