import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

import { useColumns } from "@/components/containers/asset-row";
import { DataTable } from "@/components/containers/data-table";
import Content from "@/components/layouts/Content";
import DashboardLayout from "@/components/layouts/LandingLayout";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const data = [
  {
    id: "1",
    name: "Scooter 1",
    image:
      "https://contents.mediadecathlon.com/p2562212/k$360dae6eb34868d23a943f08a0285ea6/skuter-mid-1-anak-anak-biru-galaxy-oxelo-8817672.jpg?f=1920x0&format=auto",
    status: "In Used",
    buyer: "John Doe",
    attachment: "",
  },
  {
    id: "2",
    name: "Scooter 2",
    image:
      "https://contents.mediadecathlon.com/p2562212/k$360dae6eb34868d23a943f08a0285ea6/skuter-mid-1-anak-anak-biru-galaxy-oxelo-8817672.jpg?f=1920x0&format=auto",
    status: "In Trial",
    buyer: "John Doe",
    attachment: "",
  },
  {
    id: "3",
    name: "Scooter 3",
    image:
      "https://contents.mediadecathlon.com/p2562212/k$360dae6eb34868d23a943f08a0285ea6/skuter-mid-1-anak-anak-biru-galaxy-oxelo-8817672.jpg?f=1920x0&format=auto",
    status: "Broken",
    buyer: "-",
    attachment:
      "https://contents.mediadecathlon.com/p2562212/k$360dae6eb34868d23a943f08a0285ea6/skuter-mid-1-anak-anak-biru-galaxy-oxelo-8817672.jpg?f=1920x0&format=auto",
  },
];

export default function DemoPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="flex h-full flex-col justify-center overflow-y-auto rounded-md bg-white outline-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
        <div className={`${poppins.className} bg-[#FFF]`}>
          <DataTable
            columns={useColumns()}
            data={data}
            emptyMessage="No records to display."
          />
        </div>
      </div>
    </div>
  );
}
DemoPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <Content>{page}</Content>
    </DashboardLayout>
  );
};
