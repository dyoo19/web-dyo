import React from "react";
import { useRouter } from "next/router";

import Content from "@/components/layouts/Content";
import DashboardLayout from "@/components/layouts/LandingLayout";

const data = [
  {
    id: "SCOOT-1",
    name: "Scooter 1",
    image:
      "https://contents.mediadecathlon.com/p2562212/k$360dae6eb34868d23a943f08a0285ea6/skuter-mid-1-anak-anak-biru-galaxy-oxelo-8817672.jpg?f=1920x0&format=auto",
    status: "In Used",
    buyer: "John Doe",
    attachment: "",
  },
  {
    id: "SCOOT-2",
    name: "Scooter 2",
    image:
      "https://contents.mediadecathlon.com/p2562212/k$360dae6eb34868d23a943f08a0285ea6/skuter-mid-1-anak-anak-biru-galaxy-oxelo-8817672.jpg?f=1920x0&format=auto",
    status: "In Trial",
    buyer: "John Doe",
    attachment: "",
  },
  {
    id: "SCOOT-3",
    name: "Scooter 3",
    image:
      "https://contents.mediadecathlon.com/p2562212/k$360dae6eb34868d23a943f08a0285ea6/skuter-mid-1-anak-anak-biru-galaxy-oxelo-8817672.jpg?f=1920x0&format=auto",
    status: "Broken",
    buyer: "-",
    attachment: "https://i.redd.it/gyt0jc3yxvmb1.jpg",
  },
];

const AssetsDetail = () => {
  const router = useRouter();

  const slug = router.query.id;
  const asset = data.find((item) => item.id === slug);
  console.log(asset);

  return (
    <div className="flex flex-col gap-6 pl-6">
      <h1 className="text-3xl font-bold">{asset?.name}</h1>
      <div className="flex flex-row gap-8">
        <img
          src={asset?.image}
          alt={asset?.name}
          className="h-[400px] w-[400px] rounded-lg object-cover"
        />
        <div className="flex flex-col gap-2 text-xl">
          <h1 className="">
            <b>Status :</b> {asset?.status}
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
