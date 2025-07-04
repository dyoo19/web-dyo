import React, { useState } from "react";
import { useRouter } from "next/router";
import { Pencil } from "lucide-react";

import Content from "@/components/layouts/Content";
import DashboardLayout from "@/components/layouts/LandingLayout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { data } from "@/utils/data";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const AssetsDetail = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const slug = router.query.id;
  const asset = data.find((item) => item.id === slug);

  return (
    <div className="flex flex-col gap-6 sm:pl-6">
      <h1 className="text-3xl font-bold">{asset?.name}</h1>
      <div className="flex flex-col gap-8 sm:flex-row">
        <img
          src={asset?.image}
          alt={asset?.name}
          className="rounded-lg object-cover sm:h-[400px] sm:w-[400px]"
        />
        <div className="flex flex-col gap-2 text-xl">
          <h1
            onClick={() => {
              setIsOpen(true);
            }}
            className="flex cursor-pointer flex-row items-center gap-1"
          >
            <b>Status :</b> {asset?.status}
            <Pencil className="pl-2" />
          </h1>
          <h1 className="">
            <b>Current Borrower :</b> {asset?.buyer}
          </h1>
          {asset?.attachment && (
            <>
              <b>Broken Attachment :</b>
              <img
                src={asset?.attachment}
                alt="Attachment"
                className="h-[200px] w-[200px] rounded-lg object-cover"
              />
            </>
          )}
        </div>
      </div>
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-h-[95vh] sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Status</DialogTitle>
            </DialogHeader>
            <Select onValueChange={(value: string) => {}}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    key={"In Used"}
                    value={"In Used"}
                    className="font-semibold text-black transition-all duration-150 ease-linear hover:text-white"
                  >
                    {"In Used"}
                  </SelectItem>
                  <SelectItem
                    key={"Available"}
                    value={"Available"}
                    className="font-semibold text-black transition-all duration-150 ease-linear hover:text-white"
                  >
                    {"Available"}
                  </SelectItem>{" "}
                  <SelectItem
                    key={"Broken"}
                    value={"Broken"}
                    className="font-semibold text-black transition-all duration-150 ease-linear hover:text-white"
                  >
                    {"Broken"}
                  </SelectItem>{" "}
                  <SelectItem
                    key={"In Trial"}
                    value={"In Trial"}
                    className="font-semibold text-black transition-all duration-150 ease-linear hover:text-white"
                  >
                    {"In Trial"}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <DialogFooter className="flex flex-row justify-end gap-2">
              <Button
                onClick={() => {
                  setIsOpen(false);
                }}
                variant={"ghostMerah"}
                className="text-white"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false);
                }}
                variant={"default"}
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AssetsDetail;

AssetsDetail.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <Content>{page}</Content>
    </DashboardLayout>
  );
};
