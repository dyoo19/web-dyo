import * as React from "react";
import dynamic from "next/dynamic";
import { LayoutDashboard, Send } from "lucide-react";

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
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex w-full flex-row flex-wrap gap-6">
        <div className="flex h-[100px] w-[250px] flex-row items-center gap-6 rounded-xl bg-white p-4 shadow-lg">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#A91D43]">
            <LayoutDashboard color="white" />
          </div>
          <div>
            <h1>Total</h1>
            <p className="text-3xl font-bold">100</p>
          </div>
        </div>
        <div className="flex h-[100px] w-[250px] flex-row items-center gap-6 rounded-xl bg-white p-4 shadow-lg">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#A91D43]">
            <LayoutDashboard color="white" />
          </div>
          <div>
            <h1>In Used</h1>
            <p className="text-3xl font-bold">43</p>
          </div>
        </div>
        <div className="flex h-[100px] w-[250px] flex-row items-center gap-6 rounded-xl bg-white p-4 shadow-lg">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#A91D43]">
            <LayoutDashboard color="white" />
          </div>
          <div>
            <h1>In Trial</h1>
            <p className="text-3xl font-bold">7</p>
          </div>
        </div>
        <div className="flex h-[100px] w-[250px] flex-row items-center gap-6 rounded-xl bg-white p-4 shadow-lg">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#A91D43]">
            <LayoutDashboard color="white" />
          </div>
          <div>
            <h1>Available</h1>
            <p className="text-3xl font-bold">32</p>
          </div>
        </div>
        <div className="flex h-[100px] w-[250px] flex-row items-center gap-6 rounded-xl bg-white p-4 shadow-lg">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#A91D43]">
            <LayoutDashboard color="white" />
          </div>
          <div>
            <h1>Broken</h1>
            <p className="text-3xl font-bold">18</p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col gap-6 rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-xl font-semibold">Logs History</h1>
        <div className="flex flex-col">
          <div className="border- flex flex-row gap-2 border-gray-600 py-4 font-semibold">
            <h1 className="w-[200px]">Vehicle Name</h1>
            <h1 className="w-[200px]">Status</h1>
            <h1 className="w-[200px]">Used By</h1>
            <h1 className="w-[200px]">Date</h1>
          </div>
          <div className="flex flex-row gap-2 border-t border-gray-600 py-4 text-sm">
            <h1 className="w-[200px]">Scooter 1</h1>
            <h1 className="w-[200px]">In Used</h1>
            <h1 className="w-[200px]">John Doe</h1>
            <h1 className="w-[200px]">Wednesday July 2 2025</h1>
          </div>
          <div className="flex flex-row gap-2 border-t border-gray-600 py-4 text-sm">
            <h1 className="w-[200px]">Scooter 2</h1>
            <h1 className="w-[200px]">Available</h1>
            <h1 className="w-[200px]">-</h1>
            <h1 className="w-[200px]">-</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <Content>{page}</Content>
    </DashboardLayout>
  );
};
