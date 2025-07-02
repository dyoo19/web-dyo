"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { createPortal } from "react-dom";

import AssetActionDropdown from "@/components/containers/AssetActionDropdown";
import DeleteTable from "@/data/Delete/DeleteAsset";
import { ShadCNDialog } from "@/data/Update/AssetEdit";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type AssetProps = {
  id: string;
  assetName: string;
  model: string;
  category: string;
  status: "Ready to Deploy" | "Archived" | "Pending" | "Broken" | "Lost";
  CheckOut: string;
  isDeployed: boolean;
  assetImg: string;
};

// Columns definition for the DataTable
export function useColumns(): ColumnDef<any>[] {
  return [
    {
      accessorKey: "id",
      header: () => {
        return (
          <div className="pl-2 text-sm font-semibold text-black">
            Vehicle ID
          </div>
        );
      },
      cell: ({ row }) => {
        return <p className="pl-2">{row.getValue("id")}</p>;
      },
    },
    {
      accessorKey: "name",
      header: () => {
        return (
          <div className="text-sm font-semibold text-black">Vehicle Name</div>
        );
      },
    },
    {
      accessorKey: "image",
      header: () => {
        return (
          <div className="flex text-sm font-semibold text-black">Image</div>
        );
      },
      cell: ({ row }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedImage, setSelectedImage] = useState<string | null>(null);

        const handleImageClick = (imgUrl: string) => {
          setSelectedImage(imgUrl);
          setIsModalOpen(true);
        };

        const closeModal = () => {
          setIsModalOpen(false);
          setSelectedImage(null);
        };

        return (
          <>
            <div className="flex items-center text-sm font-semibold text-black">
              <Image
                width={20}
                height={20}
                alt="Asset Gambar"
                src={row.getValue("image")}
                className="h-[50px] w-[50px] cursor-pointer rounded-full"
                onClick={() => handleImageClick(row.getValue("image"))}
              />
            </div>
            {isModalOpen &&
              selectedImage &&
              createPortal(
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                  onClick={closeModal}
                >
                  <div className="relative rounded-lg bg-white p-4">
                    <Image
                      width={900}
                      height={900}
                      src={selectedImage}
                      alt="Asset Image"
                      className="h-auto max-w-full"
                    />
                  </div>
                </div>,
                document.body,
              )}
          </>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <div
            className="flex cursor-pointer flex-row items-center justify-between text-sm font-semibold text-black"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
          </div>
        );
      },
      cell: ({ row }) => {
        const status: string = row.getValue("status");

        return (
          <div className="flex items-center gap-2 text-right font-medium">
            <div
              className={`h-[10px] w-[10px] rounded-full ${
                status === "Archived"
                  ? "bg-pink-linear"
                  : status === "Broken"
                    ? "bg-slate-600"
                    : "bg-gradient-to-r from-[#A91D43] to-[#800023]"
              }`}
            />
            {status}{" "}
            {row.original.isDeployed && (
              <div className="flex h-3 w-[57px] items-center rounded-[2px] bg-[#FFE9EF] shadow-[0px_1px_2px_0px_#00000040]">
                <p className="bg-merah-primary bg-clip-text px-2 text-[8px] font-bold text-transparent">
                  Deployed
                </p>
              </div>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "buyer",
      header: () => {
        return <div className="text-sm font-semibold text-black">Borrower</div>;
      },
    },
    {
      accessorKey: "attachment",
      header: () => {
        return (
          <div className="flex text-sm font-semibold text-black">
            Attachment
          </div>
        );
      },
      cell: ({ row }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedImage, setSelectedImage] = useState<string | null>(null);

        const handleImageClick = (imgUrl: string) => {
          setSelectedImage(imgUrl);
          setIsModalOpen(true);
        };

        const closeModal = () => {
          setIsModalOpen(false);
          setSelectedImage(null);
        };

        return (
          <>
            {row.getValue("attachment") === "" ? (
              <div>-</div>
            ) : (
              <>
                <div className="flex items-center text-sm font-semibold text-black">
                  <Image
                    width={20}
                    height={20}
                    alt="Asset Gambar"
                    src={row.getValue("attachment")}
                    className="h-[50px] w-[50px] cursor-pointer rounded-full"
                    onClick={() => handleImageClick(row.getValue("attachment"))}
                  />
                </div>
                {isModalOpen &&
                  selectedImage &&
                  createPortal(
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                      onClick={closeModal}
                    >
                      <div className="relative rounded-lg bg-white p-4">
                        <Image
                          width={900}
                          height={900}
                          src={selectedImage}
                          alt="Asset Image"
                          className="h-auto max-w-full"
                        />
                      </div>
                    </div>,
                    document.body,
                  )}
              </>
            )}
          </>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];
}

// DataTableRowActions component
interface DataTableRowActionsProps {
  row: { original: AssetProps };
}

export default function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsDrawerOpen(false);
  };

  const handleEditAsset = () => {
    setIsDialogOpen(true);
    setIsDropdownOpen(false);
  };

  const handleDeleteAsset = () => {
    setIsDrawerOpen(true);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <AssetActionDropdown
        isOpen={isDropdownOpen}
        onOpenChange={setIsDropdownOpen}
        onEdit={handleEditAsset}
        onDelete={handleDeleteAsset}
      />
      <ShadCNDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        assetID={row.original.id}
      />
      <DeleteTable
        isOpen={isDrawerOpen}
        onClose={handleCloseDialog}
        assetID={row.original.id}
      />
    </>
  );
}
