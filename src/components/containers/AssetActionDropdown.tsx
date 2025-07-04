// components/AssetActionDropdown.tsx

"use client";

import * as React from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface AssetActionDropdownProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  generateQr: () => void;
  onDelete: () => void;
  downloadQR: () => void;
  isGenerated: boolean;
}

export default function AssetActionDropdown({
  isOpen,
  onOpenChange,
  generateQr,
  onDelete,
  downloadQR,
  isGenerated,
}: AssetActionDropdownProps) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-merah-primary"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {isGenerated ? (
          <DropdownMenuItem onClick={downloadQR}>Download QR</DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={generateQr}>Generate QR</DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
