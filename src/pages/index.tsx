import * as React from "react";
import dynamic from "next/dynamic";

import {
  AccesoriesBadge,
  ComputerBadge,
  LaptopLayouts,
  PeopleBadge,
} from "@/components/laptop";
import Content from "@/components/layouts/Content";
import DashboardLayout from "@/components/layouts/LandingLayout";

const DonutChart = dynamic(() => import("@/components/DonutChart"), {
  ssr: false,
});


export default function Home() {
  return (
    <>tes</>
  );
}

Home.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <Content>{page}</Content>
    </DashboardLayout>
  );
};
