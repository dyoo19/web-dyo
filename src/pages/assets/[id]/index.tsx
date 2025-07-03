import React from "react";
import { useRouter } from "next/router";

import Content from "@/components/layouts/Content";
import DashboardLayout from "@/components/layouts/LandingLayout";

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

const AssetsDetail = () => {
  const router = useRouter();

  const slug = router.query.id;
  return <div>{slug}</div>;
};

export default AssetsDetail;

AssetsDetail.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <Content>{page}</Content>
    </DashboardLayout>
  );
};
