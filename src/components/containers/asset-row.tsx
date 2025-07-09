"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import QRCode from "qrcode";
import { createPortal } from "react-dom";

import AssetActionDropdown from "@/components/containers/AssetActionDropdown";
import DeleteTable from "@/data/Delete/DeleteAsset";
import { ShadCNDialog } from "@/data/Update/AssetEdit";
import { data } from "@/utils/data";

export type AssetProps = {
  id: string;
  name: string;
  image: string;
  status: string;
  buyer: string;
  attachment: string;
  qrCode: string;
};

export function useColumns({
  assets,
  setAssets,
}: any): ColumnDef<AssetProps>[] {
  const handleQrUpdate = (id: string, qrCode: string) => {
    setAssets((prev: any) =>
      prev.map((item: any) => (item.id === id ? { ...item, qrCode } : item)),
    );
  };

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
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2 text-sm font-semibold text-black">
            <Link href={`/assets/${row.getValue("id")}`}>
              {row.getValue("name")}
            </Link>
          </div>
        );
      },
    },
    {
      accessorKey: "qrCode",
      header: () => {
        return (
          <div className="flex text-sm font-semibold text-black">QR Code</div>
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
            {row.getValue("qrCode") === "" ? (
              <div>-</div>
            ) : (
              <>
                <div className="flex items-center text-sm font-semibold text-black">
                  <Image
                    width={20}
                    height={20}
                    alt="Asset Gambar"
                    src={row.getValue("qrCode")}
                    className="h-[50px] w-[50px] cursor-pointer rounded-full"
                    onClick={() => handleImageClick(row.getValue("qrCode"))}
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
                          width={400}
                          height={400}
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
      cell: ({ row }) => (
        <DataTableRowActions
          onQrGenerated={(qr) => handleQrUpdate(row.original.id, qr)}
          row={row}
        />
      ),
    },
  ];
}

// DataTableRowActions component
interface DataTableRowActionsProps {
  row: { original: AssetProps };
  onQrGenerated?: (qrCode: string) => void;
}

export default function DataTableRowActions({
  row,
  onQrGenerated,
}: DataTableRowActionsProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [qrImage, setQrImage] = React.useState<string>("");

  const handleCloseDialog = () => {
    setIsDrawerOpen(false);
  };

  const generateQR = async () => {
    const qr = await QRCode.toDataURL(
      `https://jambar-silk.vercel.app/assets/${row.original.id}`,
    );
    setQrImage(qr);

    if (onQrGenerated) {
      onQrGenerated(qr);
    }
  };

  const downloadQR = () => {
    const qr = row.original.qrCode;

    if (!qr) {
      alert("Please generate the QR code first.");
      return;
    }

    const link = document.createElement("a");
    link.href = qr;
    link.download = `QR_${row.original.name || row.original.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        generateQr={generateQR}
        onDelete={handleDeleteAsset}
        downloadQR={downloadQR}
        isGenerated={row.original.qrCode === "" ? false : true}
      />
      <DeleteTable
        isOpen={isDrawerOpen}
        onClose={handleCloseDialog}
        assetID={row.original.id}
      />
    </>
  );
}
