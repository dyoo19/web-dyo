import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

import { useColumns } from "@/components/containers/asset-row";
import { DataTable } from "@/components/containers/data-table";
import Content from "@/components/layouts/Content";
import DashboardLayout from "@/components/layouts/LandingLayout";
import { data } from "@/utils/data";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function DemoPage() {
  const router = useRouter();
  const [assets, setAssets] = useState<any[]>(data);

  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="flex h-full flex-col justify-center overflow-y-auto rounded-md bg-white outline-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
        <div className={`${poppins.className} bg-[#FFF]`}>
          <DataTable
            columns={useColumns({ assets: assets, setAssets: setAssets })}
            data={assets}
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
